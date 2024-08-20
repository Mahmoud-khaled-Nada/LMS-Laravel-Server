import React, { useState } from 'react';
import classNames from 'classnames';
import { IoIosArrowDown } from 'react-icons/io';
import { MdOutlineDone } from 'react-icons/md';
// Define the Option type
interface Option {
  value: string;
  label: string;
  description?: string;
  icon?: string;
  disabled?: boolean;
}

// Define the Props for the MultiSelect component
interface MultiSelectProps {
  options: Option[];
  placeholder?: string;
  onChange: (selectedValues: string[]) => void;
}

const MultiSelect: React.FC<MultiSelectProps> = ({ options, placeholder, onChange }) => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleChange = (value: string) => {
    setSelectedValues((prev) => {
      const newSelection = prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value];

      onChange(newSelection);
      return newSelection;
    });
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={handleToggle}
        className="w-full flex justify-between items-start py-3 px-3 border rounded-lg bg-white text-left dark:bg-neutral-900 dark:border-neutral-700 text-gray-800 dark:text-neutral-400 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 flex items-center"
      >
        <div className="flex-1">
          {selectedValues.length > 0
            ? options
                .filter((opt) => selectedValues.includes(opt.value))
                .map((opt) => (
                  <span
                    key={opt.value}
                    className="inline-flex items-center  px-2 mr-2 text-sm bg-gray-200 rounded-full dark:bg-neutral-700 dark:text-neutral-200"
                  >
                    {opt.icon && <img src={opt.icon} alt="" className="w-5 h-5 rounded-full mr-1" />}
                    {opt.label}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleChange(opt.value);
                      }}
                      className="ml-1 text-red-500"
                    >
                      &times;
                    </button>
                  </span>
                ))
            : placeholder}
        </div>

        <IoIosArrowDown className="w-5 h-5 mr-2" />
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-neutral-900 dark:border-neutral-700">
          <div className="p-2 max-h-60 overflow-y-auto">
            {options.map((opt) => (
              <div
                key={opt.value}
                className={classNames(
                  'flex items-center p-2 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-neutral-700',
                  {
                    'opacity-50 cursor-not-allowed': opt.disabled,
                  }
                )}
                onClick={() => !opt.disabled && handleChange(opt.value)}
              >
                {opt.icon && <img src={opt.icon} alt="" className="w-5 h-5 rounded-full mr-2" />}
                <div>
                  <div className="text-sm font-semibold text-gray-800 dark:text-neutral-200">{opt.label}</div>
                  {opt.description && (
                    <div className="text-xs text-gray-500 dark:text-neutral-500">{opt.description}</div>
                  )}
                </div>
                {selectedValues.includes(opt.value) && (
                  <MdOutlineDone className="w-5 h-5 ml-auto text-blue-600 dark:text-blue-500" />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiSelect;

/**
 * call 
 *             <Label className="mt-4">
                <span>{t("roles")}</span>
                <MultiSelect
                    options={options}
                    placeholder="Select people..."
                    onChange={handleSelectionChange}
                />
            </Label>

             const options = [
        {
            value: "1",
            label: "Christina",
            description: "chris",
        },
        {
            value: "2",
            label: "David",
            description: "david",
        },
        {
            value: "3",
            label: "Alex",
            description: "alex27",
            icon: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
            disabled: true,
        },
        {
            value: "4",
            label: "Samia",
            description: "samia_samia",
            icon: "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
        },
    ];

    // Handle the selection change
    const handleSelectionChange = (selectedValues: string[]) => {
        console.log("Selected values:", selectedValues);
    };

 */

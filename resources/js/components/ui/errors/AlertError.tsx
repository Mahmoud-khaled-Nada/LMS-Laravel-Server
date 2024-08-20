import { useEffect, useState } from 'react';
import { IoMdCloseCircleOutline } from 'react-icons/io';

interface AlertErrorProps {
  errors: { [key: string]: string };
}

export function AlertError({ errors }: AlertErrorProps) {
  const [visibleErrors, setVisibleErrors] = useState<{
    [key: string]: string;
  }>(errors);

  useEffect(() => {
    setVisibleErrors(errors);
    const timer = setTimeout(() => setVisibleErrors({}), 5000);

    return () => clearTimeout(timer);
  }, [errors]);

  const errorEntries = Object.entries(visibleErrors).filter(
    ([_, value]) => value !== null && value !== undefined && value !== ''
  );

  return (
    <>
      {errorEntries.length > 0 && (
        <div className="bg-red-50 mb-8 border border-red-200 text-sm text-red-800 rounded-lg p-4 dark:bg-red-800/10 dark:border-red-900 dark:text-red-500">
          <div className="flex">
            <div className="shrink-0">
              <IoMdCloseCircleOutline
                className="shrink-0 size-6 mt-0.5 cursor-pointer"
                onClick={() => setVisibleErrors({})}
              />
            </div>
            <div className="ms-4">
              <h3 className="text-sm font-semibold">A problem has been occurred while submitting your data.</h3>
              <div className="mt-2 text-sm text-red-700 dark:text-red-400">
                {errorEntries.map(([key, error], index) => (
                  <ul className="list-disc space-y-1 ps-5" key={index}>
                    <li>{error}</li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

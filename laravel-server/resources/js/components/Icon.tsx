import React from 'react';

// Define the type for the icon components
type IconComponent = React.FC<React.SVGProps<SVGSVGElement>>; // Adjust if your icons have different props

// Define the shape of the Icons object
interface IconsType {
  [key: string]: IconComponent;
}

// Example Icons object (replace with your actual icons)
const Icons: IconsType = {
  home: (props) => (
    <svg {...props}>
      <path d="..." />
    </svg>
  ),
  user: (props) => (
    <svg {...props}>
      <path d="..." />
    </svg>
  ),
  // Add other icons here
};

// Define the type for the Icon component props
interface IconProps extends React.SVGProps<SVGSVGElement> {
  icon: keyof IconsType; // `icon` prop must be a key from the Icons object
}

// The Icon component
const Icon: React.FC<IconProps> = ({ icon, ...props }) => {
  const IconComponent = Icons[icon];
  return <IconComponent {...props} />;
};

export default Icon;

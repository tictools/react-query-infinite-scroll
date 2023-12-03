export const BackIcon = ({ size = 24, color = "#242424", ...rest } = {}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    {...rest}
  >
    <path
      fill={color}
      d="M10 22 0 12 10 2l1.775 1.775L3.55 12l8.225 8.225L10 22Z"
    />
  </svg>
);
export default BackIcon;

export const IconWeight = ({ color, size, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path
        fill={color}
        d="M6 19h12L16.575 9h-9.15zm6-12q.425 0 .713-.288T13 6q0-.425-.288-.712T12 5q-.425 0-.712.288T11 6q0 .425.288.713T12 7m2.825 0h1.75q.75 0 1.3.5t.675 1.225l1.425 10q.125.9-.462 1.588T18 21H6q-.925 0-1.513-.687t-.462-1.588l1.425-10Q5.575 8 6.125 7.5t1.3-.5h1.75q-.075-.25-.125-.487T9 6q0-1.25.875-2.125T12 3q1.25 0 2.125.875T15 6q0 .275-.05.513T14.825 7M6 19h12z"
      />
    </svg>
  );
};
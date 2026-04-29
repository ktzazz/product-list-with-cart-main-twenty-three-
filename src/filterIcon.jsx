export const FilterIcon = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      style={{ color }}
    >
      <g fill="none" stroke="currentColor" strokeLinecap="round">
        <path d="M10 8h10M4 16h10" />
        <circle cx="7" cy="8" r="3" transform="rotate(90 7 8)" />
        <circle cx="17" cy="16" r="3" transform="rotate(90 17 16)" />
      </g>
    </svg>
  );
};

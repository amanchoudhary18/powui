import type { SVGProps } from 'react';

/** Indeterminate loading indicator; inherits size/color from the caller via currentColor + em. */
export function Spinner(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="42 100"
      />
    </svg>
  );
}

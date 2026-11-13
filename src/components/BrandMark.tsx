export function BrandMark({
  className = 'h-10 w-auto',
  variant = 'light',
}: {
  className?: string;
  variant?: 'light' | 'dark';
}) {
  return (
    <span
      className={`inline-flex items-center shrink-0 overflow-hidden ${
        variant === 'dark' ? 'bg-white rounded-xl px-2 py-0.5' : ''
      }`}
    >
      <img
        src="/assets/aistudio/IMG_e4352e8e-ad84-4a9d-bea7-87894ab7fa87_20d1fba5.jpg"
        alt="Kidzee"
        className={`${className} object-contain`}
        decoding="async"
      />
    </span>
  );
}

export function CurvedWaveDivider({
  fill = '#FFFBF2',
  flip = false,
  className = '',
}: {
  fill?: string;
  flip?: boolean;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`w-full overflow-hidden leading-none select-none ${
        flip ? 'rotate-180' : ''
      } ${className}`}
    >
      <svg
        viewBox="0 0 1440 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-9 sm:h-12 md:h-16 block"
      >
        <path
          d="M0 32C240 72 480 72 720 36C960 0 1200 0 1440 32V72H0V32Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}

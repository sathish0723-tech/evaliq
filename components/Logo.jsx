'use client';

const Logo = ({ className = "w-10 h-10 md:w-12 md:h-12" }) => {
  return (
    <div className={className}>
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Two upward-pointing arrows in teal/green */}
        <path
          d="M32 20 L36 16 L40 20"
          stroke="#4ade80"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M28 16 L32 12 L36 16"
          stroke="#4ade80"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Lowercase "e" in dark gray */}
        <path
          d="M18 24 C18 20, 20 18, 24 18 C28 18, 30 20, 30 24 C30 28, 28 30, 24 30 L24 26 M24 18 L24 14"
          stroke="#6b7280"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default Logo;


'use client'

export function MoulinDeFranceLogo({ className = 'w-10 h-10' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Windmill blades */}
      <g transform="translate(100, 100)">
        {/* Blade 1 - Top */}
        <rect
          x="-8"
          y="-50"
          width="16"
          height="45"
          fill="#41141B"
          opacity="0.9"
        />
        {/* Blade 2 - Right */}
        <rect
          x="35"
          y="-8"
          width="45"
          height="16"
          fill="#41141B"
          opacity="0.85"
        />
        {/* Blade 3 - Bottom */}
        <rect
          x="-8"
          y="5"
          width="16"
          height="45"
          fill="#41141B"
          opacity="0.8"
        />
        {/* Blade 4 - Left */}
        <rect
          x="-50"
          y="-8"
          width="45"
          height="16"
          fill="#41141B"
          opacity="0.75"
        />

        {/* Center circle */}
        <circle cx="0" cy="0" r="12" fill="#EEA637" />
        <circle cx="0" cy="0" r="8" fill="#41141B" />

        {/* Gold accent ring */}
        <circle cx="0" cy="0" r="16" fill="none" stroke="#EEA637" strokeWidth="2" />
      </g>

      {/* Decorative elements */}
      <g strokeLinecap="round">
        {/* Wheat stalks left */}
        <path
          d="M 30 140 Q 25 120 30 100"
          stroke="#EEA637"
          strokeWidth="2"
          fill="none"
          opacity="0.7"
        />
        <path
          d="M 40 145 Q 38 125 42 105"
          stroke="#EEA637"
          strokeWidth="2"
          fill="none"
          opacity="0.6"
        />

        {/* Wheat stalks right */}
        <path
          d="M 170 140 Q 175 120 170 100"
          stroke="#EEA637"
          strokeWidth="2"
          fill="none"
          opacity="0.7"
        />
        <path
          d="M 160 145 Q 162 125 158 105"
          stroke="#EEA637"
          strokeWidth="2"
          fill="none"
          opacity="0.6"
        />
      </g>

      {/* Decorative dots for wheat */}
      <circle cx="28" cy="95" r="2" fill="#EEA637" opacity="0.5" />
      <circle cx="38" cy="98" r="2" fill="#EEA637" opacity="0.5" />
      <circle cx="172" cy="95" r="2" fill="#EEA637" opacity="0.5" />
      <circle cx="162" cy="98" r="2" fill="#EEA637" opacity="0.5" />
    </svg>
  )
}

export default function Logo() {
  return (
    <svg viewBox="0 0 960 960" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient
          id="b"
          x1={87.16}
          x2={172.6}
          y1={-453.38}
          y2={-453.38}
          gradientTransform="matrix(81.838 0 0 -78 87.16 377.94)"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            style={{
              stopColor: "#006fe7",
            }}
            offset={0}
          />
          <stop
            style={{
              stopColor: "#0242b3",
            }}
            offset={1}
          />
        </linearGradient>
        <linearGradient
          id="a"
          x1={172.6}
          x2={632.84}
          y1={-446.42}
          y2={-446.42}
          gradientTransform="translate(-34.402 781.43) scale(1.3333)"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            style={{
              stopColor: "#0c0b81",
            }}
            offset={0}
          />
          <stop
            style={{
              stopColor: "#100ea8",
            }}
            offset={0.037}
          />
          <stop
            style={{
              stopColor: "#2832e7",
            }}
            offset={1}
          />
        </linearGradient>
      </defs>
      <g transform="matrix(1.3333 0 0 -1.3333 0 960)">
        <path
          transform="matrix(.75 0 0 -.75 25.802 766.28)"
          d="M104.6 81.209a22.744 22.744 0 0 0-22.793 22.793v875.41a22.744 22.744 0 0 0 22.793 22.793h636.6c37.77 0 68.178-30.406 68.178-68.176v-784.64c0-37.77-30.408-68.176-68.178-68.176H149.98z"
          style={{
            fill: "url(#a)",
            filter: "url(#c)",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 3.1111,
          }}
        />
        <rect
          transform="scale(1 -1)"
          x={87.16}
          y={-705.37}
          width={85.442}
          height={690.75}
          ry={17.095}
          style={{
            fill: "url(#b)",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 0.75,
          }}
        />
        <path
          d="M273.53 240.07v239.86l110.2-90.756 110.2 90.756V240.07"
          style={{
            fill: "none",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeWidth: 66.349,
            stroke: "#fff",
          }}
        />
      </g>
    </svg>
  );
}

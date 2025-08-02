{/* SvgFilters.jsx */}
<svg className="absolute w-0 h-0">
  <filter id="gooey">
    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
    <feColorMatrix
      in="blur"
      mode="matrix"
      values="1 0 0 0 0  
              0 1 0 0 0  
              0 0 1 0 0  
              0 0 0 20 -10"
      result="gooey"
    />
    <feBlend in="SourceGraphic" in2="gooey" />
  </filter>
</svg>

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function AnimatedChip() {
  const linesRef = useRef<SVGPathElement[]>([]);
  const coreRef = useRef<SVGRectElement>(null);

  useEffect(() => {
    
    linesRef.current.forEach((line, i) => {
      gsap.fromTo(
        line,
        {
          strokeDashoffset: 100,
        },
        {
          strokeDashoffset: 0,
          repeat: -1,
          duration: 2 + i * 0.3,
          ease: "power1.inOut",
          yoyo: true,
          delay: i * 0.3,
        }
      );
    });

    // Animação de pulsação do chip central
    gsap.to(coreRef.current, {
      scale: 1.05,
      transformOrigin: "center center",
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: "power1.inOut",
    });
  }, []);

  // Paths das linhas estilo circuito com segmentos horizontais e verticais
  const paths = [
    // linhas originais
    "M100 80 L100 40",             
    "M120 80 L140 80 L140 40",     
    "M140 100 L180 100 L180 80",   
    "M140 120 L180 120 L180 140",  
    "M100 120 L100 160",           
    "M80 120 L60 120 L60 160",     
    "M60 100 L20 100 L20 80",      
    "M60 80 L20 80 L20 40",        

    
    "M120 120 L120 160",            
    "M140 60 L160 60 L160 40",      
    "M80 60 L80 40",                
    "M60 60 L40 60 L40 40",         
    "M100 40 L100 20",              
    "M80 140 L40 140 L40 160",      
  ];

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Chip central */}
      <rect
        ref={coreRef}
        x="80"
        y="80"
        width="40"
        height="40"
        rx="6"
        fill="#040616"
        filter="url(#glow)"
      />

      {/* Linhas dos circuitos estilo chip */}
      {paths.map((d, i) => (
        <path
          key={i}
          ref={(el) => el && (linesRef.current[i] = el)}
          d={d}
          stroke="#040616"
          strokeWidth="2"
          fill="none"
          strokeDasharray="10 5"
          strokeLinecap="round"
        />
      ))}

      {/* Efeito de brilho */}
      <defs>
        <filter id="glow" height="150%" width="150%" x="-25%" y="-25%">
          <feDropShadow
            dx="0"
            dy="0"
            stdDeviation="2"
            floodColor="#040616"
            floodOpacity="0.9"
          />
          <feDropShadow
            dx="0"
            dy="0"
            stdDeviation="5"
            floodColor="#040616"
            floodOpacity="0.6"
          />
        </filter>
      </defs>
    </svg>
  );
}

import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import avatar from '../../../assets/perfil.png'
export default function Avatar() {
  const avatarRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true, defaults: { ease: "power1.inOut" } });

    tl.to(avatarRef.current, { scaleX: 1.05, scaleY: 0.90, duration: 1.2 })
      .to(avatarRef.current, { borderRadius: "50%", duration: 1.2 }, "<")
      .to(avatarRef.current, { scaleX: 1.05, scaleY: 1.05, duration: 1.2 })
      .to(avatarRef.current, { borderRadius: "52%", duration: 1.2 }, "<");
  }, []);

  return (
    <div className="relative mt-10 h-[250px] md:h-[400px] lg:w-[500px] lg:h-[500px] w-auto object-cover"> 
      <img
        ref={avatarRef}
        src={avatar} 
        className="w-full h-full md:mt-10 object-cover rounded-full  bg-secondaryDark/10 dark:bg-white/50 backdrop-blur-md  p-2 border-2
        dark:border-white/15 border-secondaryDark/15
        shadow-custom transition 
        hover:bg-white/50 dark:hover:bg-white/10 dark:hover:text-secondaryDark
        hover:drop-shadow-custom dark:hover:border-2 dark:hover:border-secondaryDark/20
            
        "
      />
    </div>
  );
}

import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import avatar from '../../../assets/avatar.png'
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
    <div className="relative lg:w-[400px] lg:h-[400px] sm:h-[300px] sm:w-[300px]"> 
      <img
        ref={avatarRef}
        src={avatar} 
        className="w-full h-full object-cover rounded-full shadow-2xl transition bg-primaryDark/90 dark:bg-primaryLight/90
        dark:border-white/15 border-secondaryDark/15"
      />
    </div>
  );
}

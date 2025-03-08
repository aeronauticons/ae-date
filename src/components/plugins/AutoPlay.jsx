import React, { useEffect, useRef, memo, useState } from "react";
import Lottie from "lottie-web";

export const AutoPlay = memo(({ src, className }) => {
  const container = useRef(null);
  const [inView, setInView] = useState(false);
  const [animation, setAnimation] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (container.current) {
      observer.observe(container.current);
    }

    return () => {
      if (container.current) {
        observer.unobserve(container.current);
      }
    };
  }, [container]);

  useEffect(() => {
    if (inView && !animation) {
      const anim = Lottie.loadAnimation({
        container: container.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: src,
      });
      setAnimation(anim);
    }

    return () => {
      if (animation) {
        animation.destroy();
        setAnimation(null);
      }
    };
  }, [inView, animation, src]);

  return <div ref={container} className={className}></div>;
});

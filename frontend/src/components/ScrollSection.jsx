import { useEffect, useRef, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile.jsx';

const ScrollSection = ({ children, index }) => {
  const isMobile = useIsMobile();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Skip animation on mobile — show content immediately
    if (isMobile) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isMobile]);

  const getAnimationDirection = () => {
    const directions = ['slide-left', 'slide-right', 'slide-up', 'slide-left', 'slide-right'];
    return directions[index % directions.length];
  };

  // On mobile, render without animation classes
  if (isMobile) {
    return <div>{children}</div>;
  }

  return (
    <div
      ref={sectionRef}
      className={`scroll-section ${getAnimationDirection()} ${isVisible ? 'visible' : ''}`}
    >
      {children}
    </div>
  );
};

export default ScrollSection;
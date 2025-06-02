import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxSection = ({ 
  backgroundImage, 
  overlayColor = "rgba(0, 0, 0, 0.6)", 
  height = "100vh", 
  children,
  speed = 0.5
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);
  
  return (
    <div 
      ref={ref} 
      className="relative overflow-hidden" 
      style={{ height }}
    >
      <motion.div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          y
        }}
      />
      <div 
        className="absolute inset-0" 
        style={{ 
          backgroundColor: overlayColor 
        }}
      />
      <div className="relative h-full z-10 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;
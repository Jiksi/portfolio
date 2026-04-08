import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export function ImageSlider({ imageUrls, title }: { imageUrls: string[], title: string }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % imageUrls.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [imageUrls.length, index]);

  const paginate = (newDirection: number) => {
    setIndex((prev) => (prev + newDirection + imageUrls.length) % imageUrls.length);
  };

  const variants = {
    enter: {
      zIndex: 0,
      opacity: 0
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: {
      zIndex: 0,
      opacity: 0
    }
  };

  return (
    <div className="work-image-wrapper">
      <div className="work-image-slider">
        <AnimatePresence initial={false}>
          <motion.img
            key={index}
            src={imageUrls[index]}
            alt={`${title} - image ${index + 1}`}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="work-image"
          />
        </AnimatePresence>
        
        {imageUrls.length > 1 && (
          <>
            <button 
              className="slider-arrow prev" 
              onClick={(e) => {
                e.stopPropagation();
                paginate(-1);
              }}
            >
              &lt;
            </button>
            <button 
              className="slider-arrow next"
              onClick={(e) => {
                e.stopPropagation();
                paginate(1);
              }}
            >
              &gt;
            </button>
          </>
        )}
      </div>
    </div>
  );
}

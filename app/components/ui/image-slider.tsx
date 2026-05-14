import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function ImageSlider({
    imageUrls,
    title,
}: {
    imageUrls: string[];
    title: string;
}) {
    const [[page, direction], setPage] = useState([0, 0]);

    const imageIndex =
        ((page % imageUrls.length) + imageUrls.length) % imageUrls.length;

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            paginate(1);
        }, 5000);
        return () => clearInterval(timer);
    }, [page]);

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
        }),
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    return (
        <div className="relative aspect-16/10 w-full overflow-hidden border border-white/10 bg-black/20">
            <div className="relative h-full w-full">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.img
                        key={page}
                        src={imageUrls[imageIndex]}
                        alt={`${title} - image ${imageIndex + 1}`}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: 'spring', stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 },
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        className="absolute top-0 left-0 h-full w-full object-cover"
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = swipePower(offset.x, velocity.x);

                            if (swipe < -swipeConfidenceThreshold) {
                                paginate(1);
                            } else if (swipe > swipeConfidenceThreshold) {
                                paginate(-1);
                            }
                        }}
                    />
                </AnimatePresence>

                {imageUrls.length > 1 && (
                    <>
                        <button
                            className="absolute top-1/2 left-0 z-30 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center border-none bg-black/30 font-mono text-[1.2rem] text-white opacity-100 backdrop-blur-sm transition-all duration-300 hover:bg-white/90 hover:text-foreground"
                            onClick={(e) => {
                                e.stopPropagation();
                                paginate(-1);
                            }}
                        >
                            &lt;
                        </button>
                        <button
                            className="absolute top-1/2 right-0 z-30 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center border-none bg-black/30 font-mono text-[1.2rem] text-white opacity-100 backdrop-blur-sm transition-all duration-300 hover:bg-white/90 hover:text-foreground"
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

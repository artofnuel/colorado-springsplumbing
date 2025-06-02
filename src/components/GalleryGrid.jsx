import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useUIStore } from "../store";

const GalleryGrid = ({ images }) => {
  const { setActiveGalleryImage } = useUIStore();

  // Variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Variants for items
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="aspect-square overflow-hidden rounded-lg cursor-pointer"
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "tween" }}
            onClick={() => setActiveGalleryImage(image)}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </motion.div>

      <GalleryModal />
    </>
  );
};

const GalleryModal = () => {
  const { activeGalleryImage, setActiveGalleryImage } = useUIStore();

  const closeModal = () => setActiveGalleryImage(null);

  return (
    <AnimatePresence>
      {activeGalleryImage && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-80 z-[99] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <motion.div
            className="relative max-w-4xl w-full"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            transition={{ type: "spring", damping: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-white text-2xl bg-black bg-opacity-50 w-10 h-10 rounded-full flex items-center justify-center"
              onClick={closeModal}
            >
              ×
            </button>

            <img
              src={activeGalleryImage.url}
              alt={activeGalleryImage.alt}
              className="w-full h-auto rounded-lg"
            />

            <div className="bg-white p-4 rounded-b-lg mt-2">
              <h3 className="text-lg font-bold">{activeGalleryImage.title}</h3>
              <p className="text-gray-700">{activeGalleryImage.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GalleryGrid;

import { motion } from "framer-motion";
import Nike from "../../assets/landing-assets/brands/nike.svg";
import Adiddas from "../../assets/landing-assets/brands/adiddas.svg";
import NorthFace from "../../assets/landing-assets/brands/northface.svg";
import Zara from "../../assets/landing-assets/brands/zara.svg";

const brands = [Nike, NorthFace, Adiddas, Zara, Nike, NorthFace, Adiddas];

const scrollVariants = {
  animate: {
    x: ["0%", "-50%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 40,
        ease: "linear",
      },
    },
  },
};

const BrandSection = () => {
  return (
    <section className="overflow-hidden mt-14">
      <p className="text-3xl font-semibold text-[#101928] mb-6">Brands</p>
      <div className="relative w-full">
        <motion.div
          className="flex gap-16 w-max"
          variants={scrollVariants}
          animate="animate"
        >
          {[...brands, ...brands].map((logo, index) => (
            <div key={index} className="flex-shrink-0 w-32 h-auto">
              <img
                src={logo}
                alt={`brand-${index}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BrandSection;

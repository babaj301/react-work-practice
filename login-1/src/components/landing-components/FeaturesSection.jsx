import Features from "./Features";
import { motion } from "framer-motion";

const FeaturesSection = () => {
  const cardDetails = [
    {
      text: "Original Products",
    },
    {
      text: "Satisfaction Guarantee",
    },
    {
      text: "New Arrival Everyday",
    },
    {
      text: "Fast & Free Shipping",
    },
  ];
  return (
    <div className="flex flex-col gap-10 mt-20 mb-24">
      <div className="flex flex-col text-[#101928] font-semibold text-3xl">
        <p>We provide the</p>
        <p>best customer experiences</p>
      </div>
      <div className="flex gap-4 justify-between items-center">
        {cardDetails.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center gap-2 w-full  p-4"
            initial={{ x: item.direction === "left" ? -200 : 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <Features text={item.text} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;

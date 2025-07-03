import ChineseGirls from "../../assets/landing-assets/chinese-girls.svg";
import Pool from "../../assets/landing-assets/pool.svg";
import Arrow from "../../assets/landing-assets/shop-arrow.svg";
import PurpleShoes from "../../assets/landing-assets/purple-shoe.svg";
import { motion } from "framer-motion";

const PictureSection = () => {
  return (
    <section className="mb-24">
      <section className="mb-24">
        <div className="pics-container grid grid-cols-2 grid-rows-2 min-h-[400px] max-h-[532px] gap-6">
          {/* Left full-height image */}
          <motion.div
            className="relative bg-cover bg-center row-span-full rounded-lg pt-10"
            style={{ backgroundImage: `url(${ChineseGirls})` }}
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex justify-between items-center p-1 mx-10 mt-10">
              <a
                className="bg-transparent border border-[#F3A218] text-[#F3A218] w-32 rounded-xl font-semibold text-center text-sm"
                href="/"
              >
                UP TO 80% OFF
              </a>
              <img src="./assets/arrow-up-right.svg" alt="" />
            </div>

            <div className="text-3xl text-white absolute bottom-0 left-0 w-full font-semibold bg-gradient-to-b from-[#00000000] to-[#0000008C] sm:pl-2 md:pl-4 pt-10">
              <div className="gap-2 flex items-center justify-between mx-6 min-w-48">
                <div className="mb-6">
                  <p>Kiddies Korean</p>
                  <p>Summer Collection</p>
                </div>
                <button className="flex items-center justify-center text-white text-base w-32 lg:w-36 h-14 bg-[#EB5017] hover:bg-[#EB5017]/80 p-4 rounded-lg">
                  Shop now
                  <img src={Arrow} alt="" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Top-right image */}
          <motion.div
            className="bg-cover bg-center rounded-lg flex flex-col p-11 justify-center text-left min-h-64 max-h-64 gap-5"
            style={{ backgroundImage: `url(${Pool})` }}
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <a
              className="bg-[#EB5017] rounded-xl w-32 text-white font-semibold text-center text-sm"
              href="./index.html"
            >
              UP TO 80% OFF
            </a>
            <div className="text-3xl text-white font-semibold">
              <p>Children Summer</p>
              <p>Play set</p>
            </div>
          </motion.div>

          {/* Bottom-right image */}
          <motion.div
            className="bg-cover bg-center rounded-lg"
            style={{ backgroundImage: `url(${PurpleShoes})` }}
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          ></motion.div>
        </div>
      </section>
    </section>
  );
};

export default PictureSection;

import hero from "../assets/home/desktop/image-hero.jpg";
import BtnRev from "./BtnRev";
const Hero = () => {
  return (
    <div
      className="bg-right-bottom"
      style={{
        backgroundImage: `url(${hero})`,
      }}
    >
      <div className="static align-element flex lg:justify-start justify-center items-center  ">
        <div className="w-[400px] lg:text-start md:text-center sm:text-center flex flex-col md:items-center sm:items-center gap-6 lg:items-start text-white py-36">
          <p className="text-base text-gray-300 opacity-30 ">NEW PRODUCT</p>
          <h1 className="uppercase text-5xl">XX99 Mark II Headphones</h1>
          <p className="text-base text-gray-300 mb-4">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <BtnRev />
        </div>
      </div>
    </div>
  );
};

export default Hero;

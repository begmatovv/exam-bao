import img1 from "../assets/home/desktop/image-speaker-zx9.png";
import img2 from "../assets/home/desktop/image-speaker-zx7.jpg";
import img3 from "../assets/home/desktop/image-earphones-yx1.jpg";

import BtnRev from "./BtnRev";

const CartsLanding = () => {
  return (
    <div className="mb-52">
      <div
        className="flex items-center justify-center lg:gap-36 pt-20 bg-orange-400 overflow-hidden
    sm:flex-col lg:flex-row  sm:gap-8  sm:pt-12 sm:px-6 mb-12"
      >
        <img
          src={img1}
          alt=""
          className="lg:w-[410px] lg:h-[490px] lg:relative  top-4 
      sm:w-[200px] sm:h-[235px] sm:static sm:mb-6"
        />
        <div
          className=" lg:relative lg:bottom-20 
    sm:bottom-0 lg:text-start sm:text-center sm:mb-8"
        >
          <h1
            className="text-5xl mb-6 
      sm:text-4xl"
          >
            ZX9 SPEAKER
          </h1>
          <p
            className="w-[350px] mb-10 text-base text-base-content
       sm:mb-6"
          >
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <BtnRev />
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${img2})`,
        }}
        className="bg-no-repeat lg:bg-left md:bg-cover sm:bg-center lg:w-full h-[320px] md:w-full
        sm:w-full sm:mb-6 flex flex-col justify-center mb-12"
      >
        <div className="pl-32">
          <h3 className="text-2xl mb-9">ZX7 SPEAKER</h3>
          <BtnRev />
        </div>
      </div>

      <div className="flex lg:flex-row mf:flex-row sm:flex-col items-center gap-7 justify-between ">
        <img
          className="rounded lg:w-[500px] h-80 md:w-[339px] sm:w-full"
          src={img3}
          alt=""
        />
        <div className="bg-base-300  lg:w-[540px] h-80 md:w-[339px] sm:w-full flex flex-col items-start justify-center pl-20">
          <h3 className="text-2xl mb-9">YX1 EARPHONES</h3>
          <BtnRev />
        </div>
      </div>
    </div>
  );
};

export default CartsLanding;

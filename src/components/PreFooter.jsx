import best from "../assets/shared/desktop/image-best-gear.jpg";
const PreFooter = () => {
  return (
    <div className="align-element flex lg:flex-row md:flex-col-reverse sm:flex-col-reverse items-center lg:gap-40 md:gap-16 sm:gap-10 justify-between ">
      <div className="lg:text-start text-center">
        <h3 className="text-4xl mb-8 uppercase">
          Bringing you the <span className="text-orange-300">best</span> audio
          gear
        </h3>
        <p className="text-base">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <img className="lg:w-[540px] md:w-full sm:w-full rounded-md" src={best} alt="" />
    </div>
  );
};

export default PreFooter;

import Image from "next/image";

const DescriptionCard = ({ data, index }) => {
  return (
    <div
      className={`flex justify-between pt-24 ${
        index % 2 === 0 ? `` : `flex-row-reverse`
      }`}
    >
      <div className={index % 2 === 0 ? `pr-8` : ``}>
        <h6 className="font-semibold text-base text-[#9B9B9B] uppercase tracking-wide pb-8">
          {data.subtitle}
        </h6>
        <h2 className="font-bold text-4xl text-black capitalize pb-8">
          {data.maintitle}
        </h2>
        <p className="text-xl text-black pb-8">{data.desc}</p>
      </div>
      <div className="relative w-full">
        {/* <Image width={200} height={50} src={data.image} /> */}
        <img src={data.image} alt="..." className="w-4/5"/>
      </div>
    </div>
  );
};

export default DescriptionCard;

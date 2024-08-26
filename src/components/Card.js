import Image from "next/image";
import Mark from "./Mark";
const Card = () => {
  return (
    <div className="bg-white drop-shadow-md p-[16px] w-[368px] space-y-4 rounded-xl">
      <Image
        className="rounded-xl"
        src="/images/cactus_img.jpg"
        width={336}
        height={152}
        alt="Cactus"
      />
      <Mark />
      <h1 className="text-lg font-semibold">Embracing Minimalism</h1>
      <p className="text-sm font-light">
        From minimalist sculptures to minimalist paintings, this blog will
        inspire you to appreciate the beauty that lies in simplicity.
      </p>
      <div className="p-[4px] border-t-[#6C727F]">
        <p className="text-xs font-light">Annie Spratt</p>
      </div>
    </div>
  );
};

export default Card;

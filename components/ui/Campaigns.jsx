import Image from "next/image";
import Title from "./Title";
import {FaShoppingCart} from "react-icons/fa"

const CampaignItem = () => {
  return (
    <div className="bg-secondary flex-1 rounded-md py-5 px-[15px] flex items-center gap-x-4">
      <div className="relative md:w-44 md:h-44 w-36 h-36 after:content-[''] border-primary border-[5px] rounded-full overflow-hidden">
        <Image src="/images/o1.jpg" alt="" layout="fill" objectFit="cover" className="hover:scale-105 transition-all duration-500"/>
      </div>
      <div className="text-white">
        <Title className="text-2xl">Tasty Thursday</Title>
        <div className="font-dancing my-2">
            <span className="text-[40px]">20%</span>
            <span className="text-sm inline-block ml-1">Off</span>
        </div>
        <button className="btn-primary flex items-center gap-x-2 whitespace-nowrap"> <FaShoppingCart size={20}/> Order Now</button>
      </div>
    </div>
  );
};

const Campaigns = () => {
  return (
    <div className="flex justify-between container mx-auto py-24 gap-6 flex-wrap">
      <CampaignItem />
      <CampaignItem />
    </div>
  );
};

export default Campaigns;

import Image from "next/image";
import React, { useState } from "react";
import Account from "../../components/profile/Account";
import Password from "../../components/profile/Password"
import Order from "../../components/profile/Order";

const Index = () => {
  const [tabs, setTabs] = useState(0)

  
  return (
    <div className="flex px-10 min-h-[calc(100vh_-_433px)] flex-col lg:flex-row lg:mb-0 mb-10">
      <div className="lg:w-80 w-full flex-shrink-0">
        <div className="relative flex flex-col items-center px-10 py-5 border">
          <Image
            src="/images/client1.jpg"
            alt=""
            width={100}
            height={100}
            className="rounded-full"
          />
          <b className="text-2xl">Sofia Doe</b>
        </div>
        <ul className="text-center font-semibold">
          <li className={`border border-t-0 w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ${tabs === 0 && "bg-primary text-white"} `} onClick={() => setTabs(0)}>
            <i className="fa fa-home"></i>
            <button className="ml-1">Account</button>
          </li>
          <li className={`border border-t-0 w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ${tabs === 1 && "bg-primary text-white"} `} onClick={() => setTabs(1)}>
            <i className="fa fa-key"></i>
            <button className="ml-1">Password</button>
          </li>
          <li className={`border border-t-0 w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ${tabs === 2 && "bg-primary text-white"} `} onClick={() => setTabs(2)}>
            <i className="fa fa-motorcycle"></i>
            <button className="ml-1">Orders</button>
          </li>
          <li className={`border border-t-0 w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ${tabs === 3 && "bg-primary text-white"} `} onClick={() => setTabs(3)}>
            <i className="fa fa-sign-out"></i>
            <button className="ml-1">Exit</button>
          </li>
        </ul>
      </div>
      {tabs === 0 && (
        <Account/>
      )}
      {tabs === 1 && (
        <Password/>
      )}
      {tabs === 2 && (
        <Order/>
      )}
    </div>
  );
};

export default Index;

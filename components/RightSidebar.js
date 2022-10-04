import React from "react";
import { BiSearch } from "react-icons/bi";
import { RiVideoAddFill } from "react-icons/ri";
import { CgMoreAlt } from "react-icons/cg";
import Contacts from "./Contacts";

const RightSidebar = () => {
  return (
    <div className="  hidden md:inline-flex flex-col pt-4 max-w-xl md:min-w-[200px] lg:min-w-[250px]">
      <div className="flex items-center text-gray-500">
        <p className="flex text-lg font-semibold flex-grow">Contacts</p>
        <div className="flex space-x-1 px-2">
          <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer">
            <RiVideoAddFill />
          </div>
          <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer">
            <BiSearch />
          </div>
          <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer">
            <CgMoreAlt />
          </div>
        </div>
      </div>
      <Contacts
        name="My Friend 1"
        src="https://images.pexels.com/photos/12123082/pexels-photo-12123082.jpeg?cs=srgb&dl=pexels-withsonya-12123082.jpg&fm=jpg"
        status="online"
      />
      <Contacts
        name="My Friend 2"
        src="https://images.pexels.com/photos/3845457/pexels-photo-3845457.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        status="offline"
      />
      <Contacts
        name="My Friend 3"
        src="https://images.pexels.com/photos/12123082/pexels-photo-12123082.jpeg?cs=srgb&dl=pexels-withsonya-12123082.jpg&fm=jpg"
        status="online"
      />
    </div>
  );
};

export default RightSidebar;
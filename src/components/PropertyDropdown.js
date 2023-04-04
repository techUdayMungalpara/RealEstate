import { useState, useEffect, useContext } from "react";

//icons
import { RiMapPinLine, RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";
import { BsHouseDoor } from "react-icons/bs";
//import headless ui
import { Menu } from "@headlessui/react";

import { HouseContext } from "./HouseContext";

const PropertyDropdown = () => {
  const { property, setProperty, properties } = useContext(HouseContext);
  console.log(property);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as="div" className="dropdown relative ">
      <Menu.Button
        className="dropdown-btn w-full text-left "
        onClick={() => setIsOpen(!isOpen)}
      >
        <BsHouseDoor className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight ">
            {property}
          </div>

          <div className="text-[13px]">Select your place </div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>
      <Menu.Items className="dropdown-menu">
        {properties.map((a, idx) => (
          <Menu.Item
            className="cursor-pointer hover:text-violet-700 transition  "
            as="li"
            onClick={() => setProperty(a)}
            key={idx}
          >
            {a}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default PropertyDropdown;

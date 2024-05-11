import React, { useState } from "react";
import menuIcon from "../../assets/menu.svg";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { navLinks, socialLinks } from "../../data";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className="relative h-7 w-7 cursor-pointer font-bold"
        onClick={() => setIsOpen(true)}
      >
        <img src={menuIcon} alt={"mobile-menu"} />
      </div>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={setIsOpen}
        // finalFocusRef={btnRef}
        className="relative h-full"
      >
        <DrawerOverlay onClick={() => setIsOpen(false)} />
        <DrawerContent className="flex flex-col h-full bg-[#1c222f] max-w-[80%] py-8 px-10 text-white">
          <div className="w-full flex justify-between text-center">
            <span className="flex justify-center text-center text-2xl font-semibold h-full">
              Saurabh S. Gariya
            </span>
            <DrawerCloseButton className="f-7 w-7 text-white text-xl border rounded-lg py-2 px-5" />
          </div>
          <div className="flex justify-between flex-col h-full">
            <DrawerBody className="mt-16">
              <ul className="flex flex-col list-none gap-10">
                {navLinks.map((navItem) => (
                  <li
                    className="text-2xl font-medium cursor-pointer hover:text-[#dd32f3]"
                    key={navItem.id}
                  >
                    {navItem.displayValue}
                  </li>
                ))}
              </ul>
            </DrawerBody>
            <DrawerFooter>
              <ul className="flex list-none gap-10 w-full">
                {socialLinks.map((social) => (
                  <li className="font-medium cursor-pointer" key={social.id}>
                    <img
                      src={social.icon}
                      alt={social.id}
                      className="w-10 h-10"
                    />
                  </li>
                ))}
              </ul>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileNav;

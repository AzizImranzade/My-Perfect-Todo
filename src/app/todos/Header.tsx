"use client";
import { User } from "@nextui-org/react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { IoIosLogOut } from "react-icons/io";

const Header = () => {
  return (
    <nav className="h-20 flex w-full px-20 items-center  flex-shrink-0 justify-between  ">
      <h1 className="text-3xl">Todo</h1>
      <Dropdown>
        <DropdownTrigger>
          <User
            className=" flex-shrink-0 cursor-pointer"
            name="Junior Garcia"
            avatarProps={{
              src: "https://avatars.githubusercontent.com/u/30373425?v=4",
            }}
          />
        </DropdownTrigger>
        <DropdownMenu variant="flat" aria-label="Dropdown menu with shortcut">
          <DropdownItem
            endContent={<IoIosLogOut />}
            key="delete"
            className="text-danger"
            color="danger"
          >
            Sign Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </nav>
  );
};

export default Header;

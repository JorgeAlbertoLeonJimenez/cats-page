import { useState } from "react";
import { Link, Outlet } from "react-router";
import { useStateTypes } from "../../types";

function Navbar() {
  const [listOptions, setListOptions] = useState<useStateTypes["navbar"]>([
    { uid: 1, name: "Home", to: "/", active: true },
    { uid: 2, name: "About us", to: "/about", active: false },
    { uid: 3, name: "Home", to: "home", active: false },
  ]);

  const activeButton = (id: number) => {
    setListOptions((optionValue) =>
      optionValue.map((option) =>
        option.uid === id
          ? { ...option, active: true }
          : { ...option, active: false }
      )
    );
  };

  return (
    <>
      <div className=" bg-slate-900 h-auto p-3  flex justify-between  items-center ">
        <div className="w-10 h-10 bg-black" />

        <div className="md:flex hidden w-[40%] justify-center items-center gap-3">
          {listOptions.map((option) => (
            <Link
              className={`text-white ${
                option.active && "border-b border-yellow-500"
              } flex justify-center items-center  px-3 py-1 `}
              to={option.to}
              key={option.uid}
              onClick={() => activeButton(option.uid)}
            >
              {option.name}
            </Link>
          ))}
          <button className="bg-yellow-500 rounded-md px-3 py-1">login</button>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;

import Button from "../components/Button";
import Logo from "../public/logo.png";
import Image from "next/image";

function AltTopMenu() {
  return (
    <div className="w-full bg-bits-green">
      <div className="py-1 px-7">
        <div className="flex justify-between">
          <div className="flex items-center pr-3">
            <div>
              <Image src={Logo} />
            </div>
            <div className="md:px-40 px-10">
              <ul className="flex flex-auto lg:space-x-20 space-x-4">
                <li
                  onClick="selected()"
                  className="text-bits-yellow bg-bits-red px-3.5 py-2.5 rounded"
                >
                  Home
                </li>
                <li
                  onClick="selected()"
                  className="text-bits-yellow bg-bits-red px-3.5 py-2.5 rounded"
                >
                  Menu
                </li>
                <li
                  onClick="selected()"
                  className="text-bits-yellow bg-bits-red px-3.5 py-2.5 rounded"
                >
                  Locations
                </li>
                <li
                  onClick="selected()"
                  className="text-bits-yellow bg-bits-red px-3.5 py-2.5 rounded"
                >
                  About Us
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AltTopMenu;

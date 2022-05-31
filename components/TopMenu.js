import Image from "next/image";
import Logo from "../public/logo.png";
import { useEffect } from "react";
import clsx from "clsx";

function TopMenu(props) {
  const selectedMenuButton = props.topMenuButton;
  console.log(selectedMenuButton);
  return (
    <nav className="bg-bits-green px-2 sm:px-4 py-2.5 dark:bg-bits-green">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div className="flex items-center">
          <Image src={Logo} height="88px" width="198px" alt="Lil Bits Logo" />
        </div>

        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-xl">
          <li>
            <a
              href="#"
              className={clsx(
                "block",
                selectedMenuButton === "home" && "bg-black",
                "py-2",
                "pr-4",
                "pl-3",
                "text-bits-yellow",
                "md:hover:bg-transparent",
                "md:border-0",
                "hover:text-bits-dark-yellow",
                "md:p-0"
              )}
              aria-current="page"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className={clsx(
                "block",
                selectedMenuButton === "selectDish" && "bg-black",
                "py-2",
                "pr-4",
                "pl-3",
                "text-bits-yellow",
                "md:hover:bg-transparent",
                "md:border-0",
                "hover:text-bits-dark-yellow",
                "md:p-0"
              )}
              aria-current="page"
            >
              Select Meal
            </a>
          </li>
          <li>
            <a
              href="#"
              className={clsx(
                "block",
                selectedMenuButton === "selectDrink" && "bg-black",
                "py-2",
                "pr-4",
                "pl-3",
                "text-bits-yellow",
                "md:hover:bg-transparent",
                "md:border-0",
                "hover:text-bits-dark-yellow",
                "md:p-0"
              )}
              aria-current="page"
            >
              Select Drink
            </a>
          </li>
          <li>
            <a
              href="#"
              className={clsx(
                "block",
                selectedMenuButton === "order" && "bg-black",
                "py-2",
                "pr-4",
                "pl-3",
                "text-bits-yellow",
                "md:hover:bg-transparent",
                "md:border-0",
                "hover:text-bits-dark-yellow",
                "md:p-0"
              )}
              aria-current="page"
            >
              Order
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default TopMenu;

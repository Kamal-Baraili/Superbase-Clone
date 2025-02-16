import { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../shared/card/productCard";
import DeveloperCard from "../../shared/card/developersCard";

const Nav = () => {
  const [isProductHover, setProductHover] = useState(false);
  const [isDeveloperHover, setDeveloperHover] = useState(false);

  return (
    <>
      <div className="w-full relative">
        <div className="w-full py-2 bg-[#121212] border-b border-b-zinc-700 sticky inset-0 z-50">
          <div className="w-11/12 mx-auto flex justify-between items-center">
            <div className="flex gap-10">
              <div className="h-12 w-32 flex items-center">
                <Link to="/">
                  <img
                    className="object-contain"
                    src="/logo-img.png"
                    alt="logo-img"
                  />
                </Link>
              </div>
              <div className="flex gap-8 items-center">
                <div
                  onMouseEnter={() => setProductHover(true)}
                  onMouseLeave={() => setProductHover(false)}
                  className="flex gap-1 items-end cursor-pointer"
                >
                  <span
                    className={`capitalize text-sm ${
                      isProductHover ? "text-[#01BB6E]" : "text-[#fdfdfd]"
                    }`}
                  >
                    Product
                  </span>
                  <svg
                    className={`${
                      isProductHover && "rotate-180"
                    } transition ease-in-out duration-300`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill={`${isProductHover ? "#01BB6E" : "#fff"}`}
                      fill-rule="evenodd"
                      d="m8 10.207l3.854-3.853l-.707-.708L8 8.793L4.854 5.646l-.708.708z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>

                <div
                  onMouseEnter={() => setDeveloperHover(true)}
                  onMouseLeave={() => setDeveloperHover(false)}
                  className="flex gap-1 items-end cursor-pointer"
                >
                  <span
                    className={`capitalize text-sm ${
                      isDeveloperHover ? "text-[#01BB6E]" : "text-[#fdfdfd]"
                    }`}
                  >
                    Developers
                  </span>
                  <svg
                    className={`${
                      isDeveloperHover && "rotate-180"
                    } transition ease-in-out duration-300`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill={`${isDeveloperHover ? "#01BB6E" : "#fff"}`}
                      fill-rule="evenodd"
                      d="m8 10.207l3.854-3.853l-.707-.708L8 8.793L4.854 5.646l-.708.708z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>

                <Link to="enterprise">
                  <span className="capitalize text-sm text-[#fdfdfd] hover:text-[#01BB6E]">
                    Enterprise
                  </span>
                </Link>

                <Link to="blogs">
                  <span className="capitalize text-sm text-[#fdfdfd] hover:text-[#01BB6E]">
                    Blogs
                  </span>
                </Link>
              </div>
            </div>

            <div className=" flex items-center gap-4">
              <div className="flex gap-1 items-center rounded-lg hover:bg-[#292929] px-3 py-1 cursor-pointer border border-[#292929] hover:border-zinc-200">
                <img
                  className="h-5 w-5"
                  src="/github-icon.svg"
                  alt="github-logo"
                />
                <h5 className="text-[12px]">77.2k</h5>
              </div>
              <div className="flex gap-2 ">
                <div>
                  <h4 className="text-[12px] px-3 py-1 text-[#fdfdfd] bg-[#242424] rounded-lg cursor-pointe">
                    Sign in
                  </h4>
                </div>

                <div>
                  <h4 className="text-[12px] px-3 py-1 text-[#fdfdfd] rounded-lg bg-[#287050] cursor-pointer">
                    Start your project
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-18 left-52 z-20 transition cursor-pointer">
          {isProductHover && <ProductCard setProductHover={setProductHover} />}
          {isDeveloperHover && (
            <DeveloperCard setDeveloperHover={setDeveloperHover} />
          )}
        </div>
      </div>
    </>
  );
};

export default Nav;

import Navmenus from "../../../db/mockdata";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
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
              {Navmenus.map((key, index) => {
                return (
                  <ul key={index}>
                    <Link to={key}>
                      <li className="capitalize text-base text-[#fdfdfd] hover:text-[#01BB6E]">
                        {key}
                      </li>
                    </Link>
                  </ul>
                );
              })}
            </div>
          </div>

          <div className=" flex items-center gap-4">
            <div className="flex gap-1 items-center rounded-lg hover:bg-[#292929] px-3 py-1 cursor-pointer border border-[#292929] hover:border-zinc-200">
              <img
                className="h-5 w-5"
                src="/github-logo.svg"
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
    </>
  );
};

export default Nav;

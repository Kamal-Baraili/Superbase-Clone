import Navmenus from "../../../db/mockdata";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="py-2 border-b border-b-zinc-50">
        <div className="w-[90%] mx-auto flex justify-between items-center">
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
                      <li className="capitalize text-base font-extrabold text-[#fdfdfd] hover:text-[#01BB6E]">
                        {key}
                      </li>
                    </Link>
                  </ul>
                );
              })}
            </div>
          </div>

          <div className=" flex items-center gap-4">
            <div className="flex gap-1 items-center rounded-lg border hover:bg-[#292929] px-3 py-1">
              <img
                className="h-5 w-5"
                src="/github-logo.svg"
                alt="github-logo"
              />
              <h5 className="text-[12px] text-[#efefef] font-bold">77.2k</h5>
            </div>
            <div className="flex gap-2">
              <div>
                <h4 className="text-[12px] text-[#efefef] font-bold px-3 py-1 bg-[#242424] rounded-lg">
                  Sign in
                </h4>
              </div>

              <div>
                <h4 className="text-[12px] text-[#efefef] font-bold px-3 py-1 rounded-lg bg-[#287050]">
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

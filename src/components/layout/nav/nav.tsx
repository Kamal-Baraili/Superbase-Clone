import Navmenus from "../../../db/mockdata";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="py-3 border-b border-b-zinc-50">
        <div className="w-[90%] mx-auto">
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
                      <li className="capitalize text-lg">{key}</li>
                    </Link>
                  </ul>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;

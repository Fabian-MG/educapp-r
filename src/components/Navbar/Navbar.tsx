import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavMenu from "../Menu/NavMenu";

export const Navbar = ({setIsOpen}: any) => {

  return (
    <nav className="w-full h-16 px-9 bg-white border-b flex justify-between items-center">
      <div className="flex h-full">
        <img className="m-auto w-10 h-10 mr-5" src="https://tailwindui.com/img/logos/workflow-mark-orange-500.svg" alt="logo" />
        <div className="flex flex-col cursor-pointer md:hidden justify-center items-center" onClick={setIsOpen}>
          <div className="w-5 mb-1 border-b-2 border-gray-600"></div>
          <div className="w-5 mb-1 border-b-2 border-gray-600"></div>
          <div className="w-5 border-b-2 border-gray-600"></div>
        </div>
      </div>

      <div className="w-1/3 hidden md:block">
        <div className="mt-1 h-9 w-auto flex rounded-md bg-white border border-gray-300 overflow-hidden">
          <span className="inline-flex items-center px-3 rounded-l-md text-sm">
            <FontAwesomeIcon className="text-gray-400" icon={["fas", "search"]}/>
          </span>
          <input
            type="text"
            name="company-website"
            id="company-website"
            className="flex-1 block w-full rounded-none rounded-r-md sm:text-sm border border-gray-50 focus:ring-0d"
            placeholder="Buscar"
          />
        </div>
      </div>
      
      <div className="flex justify-center items-center text-gray-500">
        <NavMenu />
      </div>
    </nav>
  );
};
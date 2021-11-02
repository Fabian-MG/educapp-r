import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const Navbar = () => {

  return (
    <nav className="w-full h-16 px-9 bg-white border-b flex justify-between items-center">
      <div className="flex h-full">
        <img className="m-auto w-10 h-10" src="https://tailwindui.com/img/logos/workflow-mark-orange-500.svg" alt="logo" />
      </div>

      <div className="w-1/3">
        <div className="mt-1 h-9 w-auto flex rounded-md bg-white border border-gray-300 overflow-hidden">
          <span className="inline-flex items-center px-3 rounded-l-md text-sm">
            <FontAwesomeIcon className="text-gray-400" icon={["fas", "search"]}/>
          </span>
          <input
            type="text"
            name="company-website"
            id="company-website"
            className="flex-1 block w-full rounded-none rounded-r-md sm:text-sm"
            placeholder="Buscar"
          />
        </div>
      </div>
      
      <div className="flex justify-center items-center text-gray-500">
        <FontAwesomeIcon className="text-sm" icon={["fas", "chevron-down"]}/>
      </div>
    </nav>
  );
};


{/* <div className="flex-shrink-0 flex items-center">
          <div className="cursor-pointer">
            <div className="border-t-2 border-gray-400 w-5 mb-1"> </div>
            <div className="border-t-2 border-gray-400 w-5 mb-1"> </div>
            <div className="border-t-2 border-gray-400 w-5 mb-1"> </div>
          </div>
        </div> */}
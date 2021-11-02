import { useState } from "react";
import { Select } from "../Fields";
import { SidebarItem } from "../SidebarItem/SidebarItem"

const navItems1 = [
  {
    title: "Inicio",
    link: '/inicio', 
    icon: "home", 
    notification: 2
  },
  {
    title: "Clases",
    link: '/clases', 
    icon: "chalkboard-teacher", 
    notification: 2
  },
  {
    title: "Actividades", 
    link: '/actividades', 
    icon: "tasks",
  },
  {
    title: "Reportes", 
    link: '/reportes', 
    icon: "chalkboard-teacher",
  },
]

const navItems2 = [
  {
    title: "Configuración",
    link: '/config', 
    icon: "cog", 
  },
  {
    title: "Ayuda",
    link: '/ayuda', 
    icon: "question-circle", 
    notification: 2
  },
  {
    title: "Seguridad", 
    link: '/reportes', 
    icon: "shield-alt",
  },
]

export const Sidebar = ({route}) => {

    const [currentRoute, setCurrentRoute] = useState('/inicio');

    return (
        <div className="w-56 h-full pt-9 flex flex-col ">

          <div className="w-full px-4 mb-9">
            <Select />
          </div>

          <div className="w-full px-4 overflow-y-auto">
              
                {navItems1.map((item, idx) => (
                  <SidebarItem key={idx} item={item} currentRoute={currentRoute}/>
                ))}
          </div>

            <div className="w-full flex items-center justify-between p-3 my-4">
                <div className="w-full border-b border-gray-300"/>
            </div>

          <div className="w-full px-4 overflow-y-auto">
              
                {navItems2.map((item, idx) => (
                  <SidebarItem key={idx} item={item} currentRoute={currentRoute}/>
                ))}
          </div>

            {/* <div className="w-full h-20 p-3 border-t border-gray-200 flex items-center justify-between">
              <div 
                className="w-10 h-10 rounded-full bg-cover " 
                style={{backgroundImage: `url("https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")`}} 
                />
              <div className="text-left">
                <p className="font-bold text-sm text-gray-600">Rubén Rodriguez</p>
                <p className="text-xs text-gray-600">Administrador</p>
              </div>
              <div className="">
                <FontAwesomeIcon 
                  icon={["fa", "cog"]} 
                  className="text-xl mr-3 text-gray-400"
                />
              </div>
            </div> */}
        </div>
    )
}

import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router";
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
  }
]

const navItems2 = [
  {
    title: "Configuración",
    link: '/configuracion', 
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
    link: '/seguridad', 
    icon: "shield-alt",
  },
]

export const Sidebar = () => {

    const location = useLocation();
    const [currentRoute, setCurrentRoute] = useState('/dashboard');

    const setRoute = useCallback(() => {
      const { pathname } = location;
      setCurrentRoute(pathname || 'inicio');
    }, [location]);
  
    useEffect(() => {
      setRoute();
    }, [setRoute]);

    return (
          <div className="h-full pt-9 flex flex-col " style={{"minWidth": "14rem"}}>
            <div className="w-full px-4 mb-9">
                <Select />
            </div>

            <div className="w-full px-4 overflow-y-auto">
                {navItems1.map((item, idx) => (
                  <SidebarItem key={idx} item={item} currentRoute={currentRoute} setRoute={setCurrentRoute}/>
                ))}
            </div>

            <div className="w-full flex items-center justify-between p-3 my-4">
                <div className="w-full border-b border-gray-300"/>
            </div>

            <div className="w-full px-4 overflow-y-auto">
                {navItems2.map((item, idx) => (
                  <SidebarItem key={idx} item={item} currentRoute={currentRoute} setRoute={setCurrentRoute}/>
                ))}
            </div>
          </div>
    )
}

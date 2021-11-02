import { useCallback, useEffect, useState } from "react";
import { Route, Switch, useLocation } from "react-router"
import { Navbar } from "./components/Navbar/Navbar";
import { Sidebar } from "./components/Sidebar/Sidebar"
import { Dashboard } from "./pages"
import { Student } from "./pages/Student";

export const AuthApp = () => {
    const location = useLocation();
    const [currentRoute, setCurrentRoute] = useState('/dashboard');

    const setRoute = useCallback(() => {
        const { pathname } = location;
        setCurrentRoute(pathname || 'dashboard');
      }, [location]);
    
      useEffect(() => {
        setRoute();
      }, [setRoute]);

    return (
        <div className="w-full h-full bg-main fixed">
        <Navbar />
        <div className="flex flex-auto overflow-y-auto">
            <Sidebar route={currentRoute}/>
            <Switch>
                <Route path="/inicio" >
                    <Dashboard />
                </Route>
                <Route path="/estudiante" >
                    <Student />
                </Route>
            </Switch>
        </div>
    </div>
    )
}

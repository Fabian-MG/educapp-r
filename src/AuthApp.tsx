import { useState } from "react";
import { Redirect, Route, Switch } from "react-router"
import { Navbar } from "./components/Navbar/Navbar";
import { Sidebar } from "./components/Sidebar/Sidebar"
import { SlideOver } from "./components/SlideOver/SlideOver";
import { Dashboard } from "./pages"
import { Class } from "./pages/Private/Class";
import { Classes } from "./pages/Private/Classes";
import { Configuration } from "./pages/Private/Configuration";
import { Student } from "./pages/Student";

export const AuthApp = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="w-screen h-screen bg-main fixed">
        <Navbar setIsOpen={() => setIsOpen(!isOpen)}/>
        <div className="flex overflow-y-scroll" style={{"height": "92%"}}>
            <div className="hidden md:block"> 
                <Sidebar/>
            </div>
            <Switch>
                <Route path="/clases" exact>
                    <Classes />
                </Route>
                <Route path="/configuracion" exact>
                    <Configuration />
                </Route>
                <Route path="/clases/:id" >
                    <Class />
                </Route>
                <Route path="/estudiante/:id" >
                    <Student />
                </Route>
                <Route path="/inicio">
                    <Dashboard />
                </Route>
                <Route render={() => <Redirect to={{pathname: "/inicio"}} />} />
            </Switch>
        </div>
        
        <SlideOver isOpen={isOpen}  setIsOpen={() => setIsOpen(!isOpen)}/>
    </div>
    )
}

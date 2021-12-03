import { Redirect, Route, Switch } from "react-router"
import { Navbar } from "./components/Navbar/Navbar";
import { Sidebar } from "./components/Sidebar/Sidebar"
import { Dashboard } from "./pages"
import { Class } from "./pages/Private/Class";
import { Classes } from "./pages/Private/Classes";
import { Configuration } from "./pages/Private/Configuration";
import { Student } from "./pages/Student";

export const AuthApp = () => {
    
    return (
        <div className="w-screen h-screen bg-main">
        <Navbar />
        <div className="flex overflow-y-scroll" style={{"height": "92%"}}>
            <Sidebar/>
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
    </div>
    )
}

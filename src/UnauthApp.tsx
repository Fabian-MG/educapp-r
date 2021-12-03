import { Redirect, Route, Switch } from "react-router"
import { Landing } from "./pages"
import { Authentication } from "./pages/Authentication"
import { Contact } from "./pages/Contact"
import { Prices } from "./pages/Prices"

export const UnauthApp = () => {
    return (
        <div className="w-screen h-screen flex overflow-x-hidden bg-white">
            <Switch>
                <Route path="/contacto" >
                    <Contact />
                </Route>
                <Route path="/precios" >
                    <Prices />
                </Route>
                <Route path="/precios" >
                    <Prices />
                </Route>
                <Route path="/auth" >
                    <Authentication />
                </Route>
                <Route path="/" exact>
                    <Landing />
                </Route>
                <Route render={() => <Redirect to={{pathname: "/"}} />} />
            </Switch>
        </div>
    )
}

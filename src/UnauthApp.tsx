import { Route, Switch } from "react-router"
import { Landing } from "./pages"
import { Contact } from "./pages/Contact"
import { Prices } from "./pages/Prices"

export const UnauthApp = () => {
    return (
        <>
            <Switch>
                <Route path="/contacto" >
                    <Contact />
                </Route>
                <Route path="/precios" >
                    <Prices />
                </Route>
                <Route path="/" exact>
                    <Landing />
                </Route>
            </Switch>
        </>
    )
}

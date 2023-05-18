import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./Routes";

const Router = () => {

    console.log(routes);

    return (

        <BrowserRouter>
            <Routes>
                {routes.map((route, key) => <Route key={key} path={route.path} Component={route.Component} />)}
            </Routes>
        </BrowserRouter>

    );

};

export default Router;
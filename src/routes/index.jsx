import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import * as routeNames from "./routes-path"
import Home from "../pages/home";

export function RouterApp(params){
    return (
        <Router>
            <Routes>
                <Route path={`${routeNames.HOME}`} element={<Home/>} />
            </Routes>
        </Router>
    );
}
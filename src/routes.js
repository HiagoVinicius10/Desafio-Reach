import React from "react";
import { BrowserRouter as Router,Route, Routes  } from "react-router-dom";
import Home from "./Containers/Home"
import Users from "./Containers/Requests"


function MyRoutes () {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/users" element={ <Users />} />
            </Routes>
        </Router>
    )

}

export default MyRoutes
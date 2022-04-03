import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Post from "../pages/Post";
import Notifications from "../pages/Notifications";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post" element={<Post />} />
            <Route path="/notifications" element={<Notifications />} />
        </Routes>
    );
};

export default Router;

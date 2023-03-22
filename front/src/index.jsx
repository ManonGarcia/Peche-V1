import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { Home } from "./Pages/Home";
import Spots from "./Pages/Spots";
import Contact from "./Pages/Contact";
import { Header } from "./Layout/Header/header";
import Footer from "./Layout/Footer/footer";
import Checklists from "./Pages/Checklists";
// import Error from "./components/Error";
import "./utils/style/style.css";

const MainTemplate = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
};
const Router = createBrowserRouter([
    {
        element: <MainTemplate />,
        // errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/coins-sympas",
                element: <Spots/>,
            },
            {
                path: "/checklists",
                element: <Checklists />,
            },
            {
                path: "/conseils",
                // element: <About />,
            },
            {
                path: "/quelle-peche",
                // element: <About />,
            },
            {
                path: "/articles-vedettes",
                // element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            }
        ]
    }
    
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={Router} />
    </React.StrictMode>,
);
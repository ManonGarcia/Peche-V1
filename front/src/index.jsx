import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { Home } from "./Pages/Home";
import Spots from "./Pages/Spots";
import SpotId from "./componants/Spot/spot";
import CardShopping from "./Pages/Sales"; 
import Contact from "./Pages/Contact";
import { Header } from "./Layout/Header/header";
import Footer from "./Layout/Footer/footer";
import Checklists from "./Pages/Checklists";
// import Error from "./components/Error";
import "./style/style.css";
import Shopping from "./Pages/Shop";
import ArticleId from "./componants/CardOfMyShop/article";

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
                path: "/coins-sympas/:id",
                element: <SpotId/>,
            },
            {
                path: "/checklists",
                element: <Checklists />,
            },
            {
                path: "/articles-vedettes",
                element: <CardShopping />,
            },
            {
                path: "/boutique",
                element: <Shopping/>,
            },
            {
                path: "/boutique/:id",
                element: <ArticleId/>,
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
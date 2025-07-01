import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import ContactUs from "../pages/ContactUs";
import Treatment from "../pages/Treatment";
import { Contact } from "lucide-react";
import PrivacyPolicy from "../pages/PrivacyPolicy";
export const Routes=createBrowserRouter([
    {
        path:"/",
        Component:App,
        children:[
            {
                path:'/',
                Component:Home,
                
            },
            {
                path:"/about",
                Component:About
            },{
                path:"/contact",
                Component:ContactUs
            },{
                path:"/treatments",
                Component:Treatment
            },{
                path:"/appointment",
                Component: ContactUs
            },{
                path:"/privacy-policy",
                Component:PrivacyPolicy
            }
        ]
    }
])
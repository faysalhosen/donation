import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Donation from "../pages/Donation/Donation";
import Statistics from "../pages/Statistics/Statistics";

const myCreatedRoute = createBrowserRouter([
    {
       path : "/",
       element : <MainLayout></MainLayout>,
       children : [
        {
           path : "/",
           element :<Home></Home>,
           loader : () => fetch('/donation.json')
        },
        {
            path : "/donation",
            element : <Donation></Donation>
        },
        {
            path : "/statistics",
            element : <Statistics></Statistics>
        },
        {
            path: "/donations/:id",
            element : <Donation></Donation>,
            loader: () =>fetch('/public/donation.json')
        }
        
       ]

    }
])

export default myCreatedRoute;
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Donation from "../pages/Donation/Donation";
import Statistics from "../pages/Statistics/Statistics";
import DonationPages from "../pages/DonationPages/DonationPages";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const myCreatedRoute = createBrowserRouter([
    {
       path : "/",
       element : <MainLayout></MainLayout>,
       errorElement: <ErrorPage></ErrorPage>,
       children : [
        {
           path : "/",
           element :<Home></Home>,
           loader : () => fetch('/donation.json')
        },
        {
            path : "/donation",
            element : <DonationPages></DonationPages>
        },
        {
            path : "/statistics",
            element : <Statistics></Statistics>
        },
        {
            path: "/donations/:id",
            element : <Donation></Donation>,
            loader: () =>fetch('/donation.json')
        }
        
       ]

    }
])

export default myCreatedRoute;
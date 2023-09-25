import { useLoaderData } from "react-router-dom";

import Banner from "../../components/Header/Banner/Banner";
import Donations from "../../components/Donations/Donations"



const Home = () => {
    const donations = useLoaderData()
    // console.log(donation)





    return (
        <div>
           <Banner></Banner>
           <Donations donations = {donations}></Donations>

           
           <div>

           </div>
         
        </div>
    );
};

export default Home;
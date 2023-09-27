import { useLoaderData } from "react-router-dom";

import Banner from "../../components/Header/Banner/Banner";
// import Donations from "../../components/Donations/Donations"
import DonationsCard from "../../components/donations/DonationsCard";
import { useState } from "react";



const Home = () => {
    const [search, setSearch] = useState([]);

    const donations = useLoaderData()
    // console.log(donation)





    return (
        <div>
           <Banner setSearch={setSearch}></Banner>
           {/* <Donations donations = {donations}></Donations> */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-6">
           {/* {
            donations?.map(donation => <DonationsCard key={donation.id} donation= {donation}></DonationsCard>)
           } */}
           {search.length > 0 
           ? search.map((result) => ( 
               <DonationsCard key={result.id} donation={result}></DonationsCard> 
             )) 
           : donations.map((donation) => <DonationsCard key={donation.id} donation={donation}></DonationsCard>)}
        </div>

           
           <div>

           </div>
         
        </div>
    );
};

export default Home;
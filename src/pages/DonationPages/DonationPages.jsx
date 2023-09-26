import { useEffect, useState } from "react";
import DonationPage from "../../components/DonationPage/DonationPage";


const DonationPages = () => {
    const [donations,setDonations] =useState([])
    const [isShow,setIsShow] = useState(false)

    

    useEffect(()=>{
        
        if(localStorage.getItem("DonationItems")){
            const addToStorage = JSON.parse(localStorage.getItem("DonationItems"));
            setDonations(addToStorage)
        }
        
       

    },[])
    
   // {(donations.map(donation=> <DonationPage key={donation.id} donation = {donation}></DonationPage>))}
   console.log(isShow);
 
    return (
       <div>
        
         <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
            
         {isShow ? donations?.map(donation=> <DonationPage key={donation.id} donation = {donation}></DonationPage>)
         : donations.length && donations?.slice(0,4)?.map(donation=> <DonationPage key={donation.id} donation = {donation}></DonationPage>)
         }
            

        </div>
        <button onClick={()=>setIsShow(!isShow) } className="px-5 py-2 text-white bg-green-400 flex mx-auto rounded-md mt-5">{isShow ? "hidden"  : "See All"}</button>
       </div>
        
        
    );
};

export default DonationPages;
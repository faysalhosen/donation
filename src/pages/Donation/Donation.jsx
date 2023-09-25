import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationCard from "./DonationCard";


const Donation = () => {

    const [donation,setDonation] = useState()
    const {id} = useParams()
    console.log(id);

    const donations = useLoaderData();
    //console.log(donations);
    
    useEffect(() => {
        const findDonation = donations?.find (donation=>donation.id == id)
        //console.log(findDonation);
        setDonation(findDonation)

    },[id,donations])

    console.log(donation);
    return (
        <div>
            {donation?
            <DonationCard donation={donation}></DonationCard>:""}


        </div>
    );
};

export default Donation;
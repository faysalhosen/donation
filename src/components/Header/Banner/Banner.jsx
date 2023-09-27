/* eslint-disable react/prop-types */
import { useState } from "react";


const Banner = ({setSearch}) => {
    const [inputText, setInputText] = useState(""); 
   const donationCards = (value) => { 
     fetch("donation.json") 
       .then((res) => res.json()) 
       .then((data) => { 
         const results = data.filter((card) => 
           card?.category?.toLowerCase().includes(value?.toLowerCase()) 
         ); 
         setSearch(results); 
       }); 
   }; 
   const handleText = (value) => { 
     setInputText(value); 
   }; 
   const handleButton = (e) => { 
     donationCards(inputText); 
     e.preventDefault(); 
   };

    return (
        <div className=" hero bg-[url('https://i.ibb.co/HCbTmpx/Rectangle-4281-1.png')] h-[70vh] ">
            <div className="hero-overlay bg-white bg-opacity-80 flex flex-col items-center justify-center">
            <h1 className="text-4xl text-center items-center font-semibold">I Grow By Helping People In Need</h1>
             <div className="text-center text-2xl mt-5 ">
                <input value={inputText} onChange={(e)=>handleText(e.target.value)} className="rounded-l " type="text" placeholder="search here..." name="" id="" />
                <button onClick={handleButton} className="bg-[#FF444A] text-white rounded-md">search</button>
            </div>
             </div>
            
        </div>
    );
};

export default Banner;
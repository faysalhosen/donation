/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import setItem from "../../components/Utility/LocalStorage";

const DonationCard = ({ donation }) => {
  

  console.log(donation);
  const {
    id,
    picture,
    title,
    category,
    card_bg_color,
    text_color,
    button_bg_color,
    price,
    description
  } = donation;
  const handleAddLocalStorage = () => {
    setItem(donation)
  }

  return (
    <div>
      <div className="max-w-5xl mx-auto flex flex-col items-center mt-5"> 
       <div className="relative"> 
         <div> 
           <img 
             src={picture} 
             className="md:w-[1400px] h-[70vh] mx-auto rounded-lg" 
             alt={`image of ${title}`} 
           /> 
           <div className="absolute md:w-[1025px]  bottom-0 bg-[rgba(11,11,11,0.50)] text-start bg-blend-overlay px-5 py-5 mx-auto bg-opacity-70 rounded-b-xl"> 
             <button 
               className="px-6 py-4 font-bold text-xl text-white rounded-lg" 
               style={{background:text_color}} 
               onClick={handleAddLocalStorage} 
             > 
               Donate ${price} 
             </button> 
           </div> 
         </div> 
       </div> 
       <div className=" mt-14"> 
         <h1 className="text-4xl font-bold text-black">{title}</h1> 
         <p className="text-lg mt-6">{description}</p> 
       </div> 
     </div>
    </div>
  );
};

export default DonationCard;

import Donations from "./Donations";
import { Link } from "react-router-dom";

const DonationsCard = ({ donation }) => {
  const {
    id,
    picture,
    title,
    category,
    card_bg_color,
    text_color,
    button_bg_color, 
  } = donation;

  return (
    <div >
  
     <Link to={`/donations/${id}`}>
    
    <div className="card   bg-base-100 shadow-xl ">
        <figure>
          <img src={picture} alt="" />
        </figure>

<div style={{background:card_bg_color}}>
<div className="card-body">
          <h1 className="w-20 text-center " style={{color:text_color,background:button_bg_color}}>{category}</h1>

          <h2 style={{color:text_color}} className="card-title">{title}</h2>
        </div>
</div>
      </div>
    
     
     </Link>
     
    </div>
  );
};

export default DonationsCard;

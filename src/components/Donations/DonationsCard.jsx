import Donations from "./Donations";

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
    <div>
      <div className="card   bg-base-100 shadow-xl">
        <figure>
          <img src={picture} alt="" />
        </figure>

        <div className="card-body">
          <h1>{category}</h1>

          <h2 className="card-title">{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default DonationsCard;

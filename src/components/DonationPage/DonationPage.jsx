/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const DonationPage = ({ donation }) => {
  const {
    picture,
    title,
    category,
    card_bg_color,
    text_color,
    button_bg_color,
    price,
  } = donation;
  return (
    <div>
      <div className="flex justify-center items-center ">
        <div
          style={{ background: card_bg_color }}
          className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
        >
          <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
            <img
              src={picture}
              alt="image"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-6">
            <h6 className="mb-4 block font-sans text-base font-semibold  leading-relaxed tracking-normal text-pink-500 antialiased">
              {category}
            </h6>
            <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {title}
            </h4>
            <p style={{ color: text_color }}>${price}</p>

            <a className="inline-block" href="#">
              <button
                style={{ background: text_color }}
                className="flex px-3 py-2 text-white rounded-md"
                type="button"
              >
                View details
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
    
    
  );
};

export default DonationPage;

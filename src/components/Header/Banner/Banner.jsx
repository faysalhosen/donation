

const Banner = () => {
    return (
        <div className=" hero bg-[url('https://i.ibb.co/HCbTmpx/Rectangle-4281-1.png')] h-[70vh] ">
            <div className="hero-overlay bg-white bg-opacity-80 flex flex-col items-center justify-center">
            <h1 className="text-4xl text-center items-center font-semibold">I Grow By Helping People In Need</h1>
             <div className="text-center text-2xl mt-5 ">
                <input className="rounded-l " type="text" placeholder="search here..." name="" id="" />
                <button className="bg-[#FF444A] text-white rounded-md">search</button>
            </div>
             </div>
            
        </div>
    );
};

export default Banner;
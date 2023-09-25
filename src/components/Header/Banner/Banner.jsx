

const Banner = () => {
    return (
        <div className=" hero bg-[url('/Resources/cover.png')] h-[70vh] ">
            <div className="hero-overlay bg-white bg-opacity-80 flex flex-col items-center justify-center">
            <h1 className="text-4xl text-center items-center font-semibold">I Grow By Helping People In Need</h1>
             <div className="text-center text-2xl mt-5 ">
                <input className="rounded-l border-black" type="text" placeholder="search here..." name="" id="" />
                <button className="bg-[#FF444A] rounded-md">search</button>
            </div>
             </div>
            
        </div>
    );
};

export default Banner;
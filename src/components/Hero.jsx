import React from 'react';

const Hero = () => {
    return (
        <div>
            <div
                className="hero min-h-[80vh] bg-cover bg-center flex-col justify-items-start max-w-[1580px]"
                style={{
                    backgroundImage: "url(/images/Banner-min.jpg)",
                }}>
                <div className="hero-overlay"></div>
                <div className="p-6 ">
                    <div className="max-w-xl">
                        <h1 className="mb-5 text-4xl text-white md:text-5xl font-bold ">Bid on Unique Items from Around the World</h1>
                        <p className="mb-5 text-white">
                            Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions
                        </p>
                        <button className="btn rounded-4xl">Explore Auctions</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
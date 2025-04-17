import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-horizontal footer-center  text-primary-content p-10">
                <aside>
                    <p className="font-bold">
                    <div>
                    <a className="btn btn-ghost text-2xl font-bold"><span className='text-blue-600'>Auction</span><span className='text-yellow-500'>Gallery</span></a>
                </div>
                        <ul
                        className="text-base font-normal flex gap-5 text-black justify-center">
                        <li><a>Bid.</a></li>
                        <li><a>Win.</a></li>
                        <li><a>Own</a></li>
                    </ul>
                        <ul
                        className="flex gap-5 p-2 text-black font-medium">
                        <li><a>Home</a></li>
                        <li><a>Auctions</a></li>
                        <li><a>Categories</a></li>
                        <li><a>How to Works</a></li>
                    </ul>
                    </p>
                    <p className='text-black' >© {new Date().getFullYear()} Auction Hub - All right reserved</p>
                </aside>
                
            </footer>
        </div>
    );
};

export default Footer;
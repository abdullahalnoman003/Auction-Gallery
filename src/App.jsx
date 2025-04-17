import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify'; 
import Auction from './components/Auction';
import Favourite from './components/Favourite';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [favorites, setFavorites] = useState([]);
  const addToFavorites = (item) => {
    if (!favorites.find(fav => fav.id === item.id)) {
      setFavorites(prev => [...prev, item]);
    }
  };
  const removeFromFavorites = (id) => {
    setFavorites(prev => prev.filter(item => item.id !== id));
  };
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero> 
      <div className='bg-blue-100 flex max-w-[1580px] mx-auto pt-8 pl-8 pr-8 pb-16  gap-5 max-md:flex-col '>
        <div className='w-[70%] max-md:w-full'>
        <h1 className="text-[#0E2954] font-bold text-3xl pb-3">Active Auctions</h1>
        <p className=" text-xl pb-5 " >Discover and bid on extraordinary items</p>
          <Auction addToFavorites={addToFavorites} favorites={favorites}></Auction>
        </div>
        <div className='w-[30%] pt-24 max-md:w-full max-md:pt-2'>
          <Favourite favorites={favorites} removeFromFavorites={removeFromFavorites}></Favourite>
        </div>
      </div>
      <Footer></Footer>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover></ToastContainer>
    </>
  );
}
export default App;

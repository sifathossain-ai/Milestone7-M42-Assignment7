import logo from '../../assets/images/logo.png'
import { LiaCoinsSolid } from "react-icons/lia";
import banner from '../../assets/images/banner-main.png'
import { useEffect, useState } from 'react';
import App from '../../App';
const Header = ({ getCoin }) => {
    const [coin, setCoin] = useState(0);

    const addCoin = () => {
        setCoin(coin + 500000);
    }

    useEffect(() => {
        const getCoinFromBtn = JSON.parse(getCoin);

        if (getCoinFromBtn <= coin) {
            setCoin(prev => prev - getCoinFromBtn);
        }
        else alert("You unavailable to buy this player!");
    }, [getCoin])

    return (
        <>
            <div className='flex justify-between items-center mb-7'>
                <img className='w-10 h-10 md:w-16 md:h-16' src={logo} alt="" />
                <div className='flex justify-center items-center gap-2 md:gap-9'>
                    <ul className='flex justify-center items-center gap-2 md:gap-9 text-[11px] md:text-[16px] text-gray-600'>
                        <li><a href="">Home</a></li>
                        <li><a href="">Fixture</a></li>
                        <li><a href="">Teams</a></li>
                        <li><a href="">Schedules</a></li>
                    </ul>
                    <div className='border px-1 py-1 md:py-3 md:px-4 rounded-lg flex items-center gap-1 md:gap-3'>
                        <p className='text-[10px] md:text-[16px] font-semibold'>{coin}</p>
                        <LiaCoinsSolid className='md:w-5 md:h-5 text-yellow-400'></LiaCoinsSolid>
                    </div>
                </div>
            </div>
            <div className='w-full h-[545px] rounded-lg bg-gradient-to-tr from-[#636b86] to-[#c299a2] text-center flex flex-col items-center justify-center space-y-4'>
                <img className='w-40 md:w-60' src={banner} alt="Banner" />
                <h2 className='text-2xl md:text-4xl font-bold text-white'>Assemble Your Ultimate Dream 11 Cricket Team </h2>
                <p className='text-gray-300 text-sm md:text-xl font-semibold'>Beyond Boundaries Beyond Limits</p>
                <div className='border p-1 rounded-xl border-[#E7FE29]'>
                    <button onClick={addCoin} className='text-[12px] md:text-[16px] px-4 py-2 rounded-xl bg-[#E7FE29] text-black font-semibold'> Claim Free Credit
                    </button>
                </div>
            </div>
        </>
    );
};


export default Header;
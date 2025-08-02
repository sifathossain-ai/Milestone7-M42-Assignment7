import logo from '../../assets/images/logo.png'
const Header = () => {
    return (
        <div className='flex justify-between items-center'>
            <img className='w-12 h-12 md:w-16 md:h-16' src={logo} alt="" />
            <div className='flex gap-4 md:gap-8 items-center'>
                <div className='flex gap-4 md:gap-7 text-gray-600'>
                    <a href="">Home</a>
                    <a href="">Fixture</a>
                    <a href="">Teams</a>
                    <a href="">Schedules</a>
                </div>
                <div className='border px-5 py-1 md:py-2 rounded-lg'>
                    <button>Coin</button>
                </div>
            </div>
        </div>
    );
};

export default Header;
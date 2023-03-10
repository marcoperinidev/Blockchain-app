import { AiFillPlayCircle } from 'react-icons/ai'; 
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';

import { Loader } from './';

const Welcome = () => {
    const connectWallet = () => {

    }

    return (
        <div className="flex w-full justify-center items-center">
            <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
                <div className="flex flex-1 justify-start flex-col md:mr-10">
                    <h1 className="text-3xl sm:text-5xl text-white text-gradient">
                        Send Crypto <br /> across the WORLD
                    </h1>
                    <p className="text-white text-left mt-5 font-light md:w-9/12 w-11/12 text-base">Explore the CRYPTO WORLD. Buy and Sell cryptocurrencies easily on Krypto</p>
                    <button className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd] hover:text-white transition ease-in-out duration-500" type="button"
                        onClick={connectWallet} > Connect Wallet
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
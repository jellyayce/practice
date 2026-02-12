import Navbar from "./Navbar"
import { useNavigate } from "react-router-dom";

function Dashboard(){

    const navigate = useNavigate();
    function navigateToBrowsePage(){
        navigate('/BrowsePage');
    }
    return(
        <div>
            <Navbar/>
            <div className="flex items-center justify-between bg-black text-white mt-0.5">
                <div className="flex flex-col justify-center items-center flex-1">
                    <div className="w-125">
                        <div className="flex flex-col text-white font-extrabold text-7xl">
                            <div className="flex gap-4">
                                <span>REV,</span>
                                <span>REPAIR,</span>
                            </div>
                            <span>REPEAT.</span>
                        </div>
                        <div className="font-light text-3xl">From Garage to Open Road, GearUp Makes Sure Your Motorcycle Is Ready for Every Adventure.</div>
                    </div>
                </div>
                <div className="flex flex-1 items-center justify-center">
                    <img src="pic1.png" alt="" className="w-180 h-140"/>
                </div>
            </div>
            <div className="flex flex-col items-center p-6 gap-4">
                <h2 className="font-light text-4xl">Book your visit and check parts availability before coming in.</h2>
                <div className="flex gap-6">
                    <button className="bg-red-700  hover:bg-red-800 text-white font-medium rounded-2xl w-60 h-10">Book an Appointment</button>
                    <button className="bg-red-700  hover:bg-red-800 text-white font-medium rounded-2xl w-60 h-10" onClick={navigateToBrowsePage}>Browse Parts</button>
                </div>
            </div>
        </div>
    );
}
export default Dashboard
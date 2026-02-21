import Navbar from "../components/Navbar"
import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";

function Dashboard(){

    const navigate = useNavigate();
    function navigateToBrowsePage(){
        navigate('/BrowsePage');
    }
    function navigateToAppointmentPage(){
        navigate('/AppointmentPage');
    }

    return(
            <div>
                <Navbar/>
                <PageWrapper>
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
                    <div className="flex flex-1 items-center justify-center hover-3d">
                        <figure className="w-180 h-140 rounded-2xl">
                            <img src="pic1.png" alt="motorcycle"/>
                        </figure>
                    </div>
                </div>
                <div className="flex flex-col items-center p-6 gap-4">
                    <h2 className="font-light text-4xl">Book your visit and check parts availability before coming in.</h2>
                    <div className="flex gap-6">
                        <button className="bg-red-700  hover:bg-red-800 text-white font-medium rounded-2xl w-60 h-10 cursor-pointer" onClick={navigateToAppointmentPage}>Book an Appointment</button>
                        <button className="bg-red-700  hover:bg-red-800 text-white font-medium rounded-2xl w-60 h-10 cursor-pointer" onClick={navigateToBrowsePage}>Browse Parts</button>
                    </div>
                </div>
                </PageWrapper>
            </div>
    );
}
export default Dashboard
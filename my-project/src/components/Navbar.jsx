import { NavLink, useNavigate} from 'react-router-dom';

function Navbar(){
    const navLinkStyles = ({ isActive }) => ({
        color: isActive ? '#B91C1C' : '##374151',
        textDecoration: isActive ? 'underline' : 'none',
        fontWeight: isActive ? 'bold' : 'normal'
    });

    const navigate = useNavigate();
    function navigateToLogin(){
        navigate('/');
    }

    return(
        <div className="flex items-center justify-between px-8 py-4 bg-white shadow">
            <div className="flex items-center gap-8">
                <img src="gearuplogo.png" alt="website logo" className="w-35 h-20"/>
                <div className="flex flex-col text-red-700 font-extrabold text-4xl">
                    <div className="flex gap-4">
                        <span>REV</span>
                        <span>REPAIR</span>
                    </div>
                    <span>REPEAT</span>
                </div>
            </div>
            <div className="flex gap-28 text-gray-700 font-medium text-xl">
                <NavLink to="/Dashboard" style={navLinkStyles}>Home</NavLink>
                <NavLink to="/AboutUs" style={navLinkStyles}>About Us</NavLink>
                <NavLink to="/Profile" style={navLinkStyles}>Profile</NavLink>
                <NavLink to="/Settings" style={navLinkStyles}>Settings</NavLink>
            </div>
            <div>
                <button className="btn bg-red-700 text-white font-medium rounded-2xl p-2 hover:bg-red-800 w-30 h-15" onClick={()=>document.getElementById('my_modal_1').showModal()}>LOG OUT</button>
                <dialog id="my_modal_1" className="modal">
                    <div className='flex items-center justify-center h-screen'>
                        <div className='flex flex-col items-center gap-12 bg-gray-100 rounded-lg p-16'>
                            <img src="gearuplogo.png" alt="" className='w-60 h-40'/>
                            <div className='flex flex-col items-center'>
                                <p className='text-2xl font-extrabold'>Are you sure you want to log out?</p>
                                <p className='text-l font-medium'>You will be signed out of your account.</p>
                            </div>
                            <div className="modal-action">
                                <form method="dialog" className='flex justify-center gap-4'>
                                    <button className="btn bg-gray-700 text-white w-25 h-10 rounded-2xl cursor-pointer">Close</button>
                                    <button className='bg-red-700 hover:bg-red-800 text-white w-25 h-10 rounded-2xl cursor-pointer' onClick={navigateToLogin}>Confirm</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    );
}
export default Navbar
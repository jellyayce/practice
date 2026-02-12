import { NavLink } from 'react-router-dom';

function Navbar(){
    const navLinkStyles = ({ isActive }) => ({
        color: isActive ? '#B91C1C' : '##374151',
        textDecoration: isActive ? 'underline' : 'none',
        fontWeight: isActive ? 'bold' : 'normal'
    });
    
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
                <NavLink to="/" style={navLinkStyles}>Home</NavLink>
                <NavLink to="/AboutUs" style={navLinkStyles}>About Us</NavLink>
                <NavLink>Profile</NavLink>
                <NavLink>Settings</NavLink>
            </div>
            <div>
                <button className="bg-red-700 text-white font-medium rounded-2xl p-2 hover:bg-red-800 w-30 h-15">LOG OUT</button>
            </div>
        </div>
    );
}
export default Navbar
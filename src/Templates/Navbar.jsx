import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-700 text-white px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo / Title */}
        <img src="/logobeach.png" alt="โลโก้" width={90}/>
        <h1 className="text-xl font-semibold ms-5 mt-5 text-4xl  font-bold">
          Blue Horizon Travel
        </h1>

        {/* Menu */}
        <ul className="flex space-x-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-yellow-300 ${
                  isActive ? "text-yellow-400 font-semibold" : ""
                }`
              }
            >
              หน้าหลัก
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/tours"
              className={({ isActive }) =>
                `hover:text-yellow-300 ${
                  isActive ? "text-yellow-400 font-semibold" : ""
                }`
              }
            >
              แพคเกจทัวร์
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/tips"
              className={({ isActive }) =>
                `hover:text-yellow-300 ${
                  isActive ? "text-yellow-400 font-semibold" : ""
                }`
              }
            >
              เคล็ดลับการท่องเที่ยว
            </NavLink>
          </li>

<li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `hover:text-yellow-300 ${
                  isActive ? "text-yellow-400 font-semibold" : ""
                }`
              }
            >
              ติดต่อเรา
            </NavLink>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
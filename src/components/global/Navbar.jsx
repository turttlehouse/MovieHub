import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white shadow-lg sticky top-0">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold">
          MovieTrade
        </a>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-yellow-300">
            Browse
          </a>
          <a href="#" className="hover:text-yellow-300">
            Sell/Trade
          </a>
          <a href="#" className="hover:text-yellow-300">
            My Account
          </a>
          <a href="#" className="hover:text-yellow-300">
            Messages
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <Link to='/admin/dashboard' className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-md font-semibold">
            Admin Panel
          </Link>
          <button className="md:hidden">
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

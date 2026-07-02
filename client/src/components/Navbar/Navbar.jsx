import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-[#131921] text-white px-8 py-4 flex items-center justify-between">
      <Link to="/" className="text-3xl font-bold text-yellow-400">
        SIMSON STORE
      </Link>

      <div className="flex items-center bg-white rounded-lg overflow-hidden w-[500px]">
        <input
          type="text"
          placeholder="Search Products..."
          className="flex-1 p-3 outline-none text-black"
        />
        <button className="bg-yellow-400 px-5 py-3 text-black">Search</button>
      </div>

      <div className="flex gap-8 text-xl">
        <Link to="/login">👤</Link>
        <Link to="/wishlist">♡</Link>
        <Link to="/cart">🛒</Link>
      </div>
    </nav>
  );
}

export default Navbar;
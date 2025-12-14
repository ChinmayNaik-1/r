import { Link } from "react-router";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/search")
  };

  return (
    // sticky
    <div className="sticky top-0 z-50 w-full bg-gray-800 border-b px-4 py-3 flex items-center justify-between">

      
      {/* Left */}
      <div className="text-3xl font-extrabold tracking-widest text-yellow-400">
        <Link
        to="/search"
        className="text-yellow-400 text-2xl font-bold hover:text-yellow-300"
        >
        RENTAL BUDDY
        </Link>
      </div>

      {/* Right */}
      <div className="flex gap-4 items-center">
        <Link
          to="/users/login"
          className="px-4 py-2 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transiton-all duration-200 transform hover:scale-105"
        >
          Login
        </Link>

        <Link
          to="/users/signup"
          className="px-4 py-2 font-semibold text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
        >
          Sign up
        </Link>

        <a
          href="https://chatgpt.com/g/g-693afe7cf278819184785ecd1f9481bf-rental-buddy"
          target="_blank"
          rel="noopener noreferrer"
          className="m-3 btn btn-primary"
          >
            chatbot
        </a>

        <button
          onClick={logout}
          className="px-4 py-2 font-semibold text-white bg-red-600 rounded-lg shadow hover:bg-red-700 transition-all tranform hover:scale-90 duration-150"
        >
          Logout
        </button>
      </div>

    </div>
  );
};

export default Navbar;

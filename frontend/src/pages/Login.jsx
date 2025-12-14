import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router";
import { useNavigate } from "react-router";

const Login = () => {
    const navigate=useNavigate();
    const [name,setName] = useState("");
    const [password,setPassword] =useState("")

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            if(!name.trim() || !password.trim())
            {
                toast.error("fill all feilds")
            }
            const res=await axios.post(`http://localhost:5001/user/login`,{name,password})
            localStorage.setItem("token", res.data.token);
            toast.success('you are now logged in')
            navigate("/admin")
        } catch (error) {
            toast.error("no such user")
        }
    }
  
 return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
    
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md bg-black/80 backdrop-blur-md p-8 rounded-2xl shadow-2xl text-white"
    >
      
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <Link
          to="/filter"
          className="text-sm text-gray-300 hover:text-white transition"
        >
          ← Home
        </Link>

        <h1 className="text-2xl font-bold tracking-wide">
          Login
        </h1>
      </div>

      {/* Username */}
      <label className="block text-gray-300 mb-1">
        Username
      </label>
      <input
        type="text"
        placeholder="Enter username"
        className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white"
        onChange={(e) => setName(e.target.value)}
      />

      {/* Password */}
      <label className="block text-gray-300 mt-4 mb-1">
        Password
      </label>
      <input
        type="password"
        placeholder="Enter password"
        className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white"
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* Button */}
      <button
        type="submit"
        className="w-full mt-6 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-400 text-black font-bold transition duration-200"
      >
        Login
      </button>
    </form>
  </div>
);


}

export default Login;
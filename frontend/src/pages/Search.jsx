import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import Navbar from "../components/Navbar";

const Search = () => {
    const navigate = useNavigate();

    const [search,setsearch] = useState("");

    const handlesearch = (e) => {
        e.preventDefault();
        try {
            navigate(`/filter?search=${search}`)
        } catch (error) {
            toast.error("ERROR SEARCHING")
        }
    }

    return(
      
      
  // <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
  <div
  className="min-h-screen flex items-center justify-center bg-cover bg-center"
  style={{ backgroundImage: "url('/bg.jpg')" }}
  >

      <div className="w-full max-w-xl bg-black/80 backdrop-blur p-8 rounded-2xl shadow-2xl text-center">
        
        {/* App Name */}
        <h1 className="text-yellow-400 text-2xl font-bold hover:text-yellow-300">
          RENTAL BUDDY
        </h1>

        {/* Tagline */}
        <p className="text-gray-400 mb-8">
          Rent vehicles easily, anywhere, anytime
        </p>

        {/* Search Form */}
        <form onSubmit={handlesearch} className="flex flex-col gap-4">
          
          <input
            type="text"
            placeholder="Search by vehicle name or location"
            className="w-full px-4 py-3 rounded-xl bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
            onChange={(e) => setsearch(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-xl font-semibold"
          >
            Search Bikes
          </button>
        </form>


        
      </div>
  </div>

    )
}

export default Search;


import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

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
        <div className="min-h-screen flex justify-center items-center bg-gray-500">
            <form className="bg-black p-6 rounded-xl shadow-2xl" onSubmit={handlesearch}>
                <div>Enter vehicle name,location</div>
                <input className="m-5 p-4" placeholder="enter your search" onChange={(e) =>{setsearch(e.target.value)}}></input>
                <button className="bg-blue-600 p-2 rounded-2xl" type="submit">Search</button>
            </form>
        </div>
    )
}

export default Search;


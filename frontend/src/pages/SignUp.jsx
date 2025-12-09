import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router";

const SignUp = () => {
    const [name,setName] = useState("");
    const [password,setPassword] =useState("")

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            if(!name.trim() || !password.trim())
            {
                toast.error("fill all feilds")
            }
            await axios.post(`http://localhost:5001/user/signup`,{name,password})
            toast.success('signed you up')
        } catch (error) {
            toast.error("error in signup")
        }
    }
  
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-500">
            <form onSubmit={handleSubmit} className="bg-black p-6 rounded-2xl shadow-lg w-80 space-y-4">
                <div className="flex justify-between">
                <Link to="/">←home</Link>
                <h1>Sign-Up</h1>
                </div>

                <input placeholder="username" type="text" className="w-full rounded-xl bg-blue-800"
                onChange={(e)=> setName(e.target.value)}/>

                <input type="password" placeholder="password" className="w-full rounded-xl bg-blue-800"
                onChange={(e)=>setPassword(e.target.value)} />

                <button type="submit">Submit</button>
            </form>
    </div>
  );
}

export default SignUp;
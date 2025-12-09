import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router";

const Login = () => {
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
        } catch (error) {
            toast.error("no such user")
        }
    }
  
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-500">
            <form onSubmit={handleSubmit} className="bg-black p-6 rounded-2xl shadow-lg w-80 space-y-4">
                <div className="flex justify-between">
                <Link to="/admin">←home</Link>
                <h1>Log-in</h1>
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

export default Login;
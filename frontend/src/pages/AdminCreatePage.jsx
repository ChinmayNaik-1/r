import { useState } from "react"
import toast from "react-hot-toast";
import { Link,useNavigate } from "react-router";
import axios from "axios";

const AdminCreatePage = () => {
    const navigate=useNavigate();
    const [image,setImage] = useState("https://picsum.photos/300/300");
    const [name,setName] = useState("");
    const [location,setLocation] = useState("");
    const [price,setPrice] = useState(0);
    const booked = false;

    const handleSubmit = async(e)=>{
        e.preventDefault();
        if ( !name.trim() || !location.trim())
        {
            toast.error("fill all the feilds")
            return;
        }
        try {
            await axios.post("http://localhost:5001/admin/create",{
                image,
                name,
                location,
                price,
                booked
            })
            toast.success("created successfully");
            navigate("/admin")
        } catch (error) {
            console.log(error);
            toast.error("could not create")
        }
    }
    
  return (
    <div>
        <Link to="/admin" className="btn bg-base-300">
            back to home
        </Link>
        <form onSubmit={handleSubmit}>
            <div className="container mx-auto p-4 m-5 bg-base-300">
                <label className="label">
                    <span className="label-text">Image URL:</span>
                </label>
                <input
                    className="input input-bordered w-full"
                    type="text"
                    placeholder="Leave empty if you dont have an image"
                    onChange={(e) => setImage(e.target.value)}
                />

                <label className="label mt-4">
                    <span className="label-text">Name:</span>
                </label>
                <input
                    className="input input-bordered w-full"
                    type="text"
                    placeholder="xyz"
                    onChange={(e) => setName(e.target.value)}
                />

                <label className="label mt-4">
                    <span className="label-text">Location:</span>
                </label>
                <input
                    className="input input-bordered w-full"
                    type="text"
                    placeholder="xyz"
                    onChange={(e) => setLocation(e.target.value)}
                />

                <label className="label mt-4">
                    <span className="label-text">Price:</span>
                </label>
                <input
                    className="input input-bordered w-full"
                    type="number"
                    placeholder="10,000"
                    onChange={(e) => setPrice(e.target.value)}
                />

                <button type="submit">Create New</button>

            </div>
        </form>

    </div>
  )
}

export default AdminCreatePage
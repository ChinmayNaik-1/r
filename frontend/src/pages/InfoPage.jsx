import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import toast from "react-hot-toast";
import { Link } from "react-router";


const InfoPage = () => {
  const {id} = useParams();

  const [card,setCard] = useState(null)
  const [loading,setLoading] = useState(true)
  const [ischanged,setIsChanged] = useState(false)

  useEffect( ()=>{
    const fetchall = async() => {
      try {
        const res=await axios.get(`http://localhost:5001/admin/${id}`);
        setCard(res.data)                                                         //pe
      } catch (error) {
        toast.error("errro getting card")
      }
      finally{
        setLoading(false)
      }
    }
    
    fetchall()
  },[id])

  const handlesubmit = async() => {
    try {
      await axios.put(`http://localhost:5001/admin/${id}`,card);
      if(ischanged)
      {
        toast.success("Your Vehicle Has Been Booked")
      }
      else{
        
      }
    } catch (error) {
      toast.error("could not update")
    }
  }

  if (loading)
  {
    return (<div>loading...</div>);
  }
  


   return (
    <div className="min-h-screen p-6">
      <Link to="/" className="btn mb-4">Back</Link>

      <div className="grid grid-cols-1 md:grid-cols-2 bg-base-300 p-6 rounded-lg max-w-4xl mx-auto">

        {/* LEFT-IMAGE */}
        <div>
          <img
            src={card.image}
            alt={card.name}
            className="w-full h-80 object-cover rounded-lg"
          />
        </div>

        {/* RIGHT SECTION — DETAILS */}
        <div className="flex flex-col space-y-4 p-2">
          <h1 className="text-3xl font-bold">{card.name}</h1>

          <p className="text-lg">
            <b>Location:</b> {card.location}
          </p>

          <p className="text-lg">
            <b>Price:</b> ₹{card.price}
          </p>

          <button className={`btn max-w-30 mx-auto p-5 ${card.booked ? "bg-red-500":"bg-green-500"}`}
          value={card.booked? "true":"false"}
          onClick={()=>{
            if(!card.booked)
            {
              setCard({...card,booked:true})
              setIsChanged(true);
            }
          }}>  {/* here */}
            {card.booked ? "BOOKED":"Available"}
          </button>

          <button onClick={handlesubmit}>
            Finalize
          </button>
        </div>

      </div>
    </div>
  );
};

export default InfoPage

import { useState } from "react"
import Navbar from "../components/Navbar"
import { useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Createcard from "../components/Createcard";
import { Link } from "react-router";

const HomePage = () => {
  const [cards,setCards] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect ( ()=>{
    const fetchall = async ()=> {
      try {
        const res = await axios.get("http://localhost:5001");
        console.log(res.data)
        setCards(res.data)
      } catch (error) {
        toast.error("counldnt get data")
      }
      finally{
        setLoading(false)
      }
    }
    
    fetchall();
  },[])






  return (
    <div className="min-h-screen">
      <Navbar/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {loading && <div>Loading...</div>}
        {cards.map(card =>{
          return <Link to={`/${card._id}`} key={card._id}><Createcard card={card}/></Link>
        })}
      </div>
    </div>
  )
}

export default HomePage

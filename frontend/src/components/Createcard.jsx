import { FaMapMarkerAlt } from "react-icons/fa";

const Createcard = ({ card }) => {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(card.location)}`;

  return (
      <div className={`${card.booked? "bg-gray-800 text-white m-5 rounded-md border border-yellow-500 overflow-hidden text-center transition-all duration-300 transform hover:scale-105 hover:bg-red-600":"bg-gray-800 text-white m-5 rounded-md border border-yellow-500 overflow-hidden text-center transition-all duration-300 transform hover:scale-105 hover:bg-green-600"}`}>
        <figure>
          <img src={card.image} alt={card.name} className="w-full h-48 object-cover" />
        </figure>
        <h2 className="text-xl font-bold mt-2">{card.name}</h2>

              {/* 📍 Location with Google Maps link */}
      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 text-blue-300 hover:text-blue-400 mt-2"
        onClick={(e) => e.stopPropagation()}
      >
        <FaMapMarkerAlt />  
        <span>{card.location}</span>
      </a>
      
        <div className="text-gray-300">{card.location}</div>
        <b className="text-gray-400">{card.price}</b>
        <p
          className={`p-2 border rounded-sm ${card.booked ? "bg-red-600" : "bg-green-600"} text-white`}
          >
        {card.booked ? "Booked" : "Available"}
        </p>

      </div>


  )
}

export default Createcard

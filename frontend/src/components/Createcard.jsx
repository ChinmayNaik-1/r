const Createcard = ({ card }) => {
  return (
      <div className="bg-gray-500 m-5 rounded-md border border-white-500 overflow-hidden">
        <figure>
          <img src={card.image} alt={card.name} className="w-full h-48 object-cover" />
        </figure>
        <h2 className="text-xl font-bold mt-2">{card.name}</h2>
        <div>{card.location}</div>
        <b>{card.price}</b>
        <p>{card.booked ? "Booked" : "Available"}</p>
      </div>
  )
}

export default Createcard
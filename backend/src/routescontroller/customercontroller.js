import Bike from "../models/schema.js"

export async function getCards(req,res) {
    try {
        const data = await Bike.find()
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({message:"internal server error"})
    }
}

export async function updateState(req,res){
    try {
        const {booked} = req.body
        if (booked === false){
            return res.status(403).json({message:"cant change you dont have privilages"});
        }
        await Bike.findByIdAndUpdate(req.params.id,{booked});
        res.status(200).json({message:"updated booking"})
    } catch (error) {
        res.status(500).json({message:"internal server error"})
    }
}
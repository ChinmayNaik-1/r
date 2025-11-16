import express from "express"
import { getCards, updateState } from "../routescontroller/customercontroller.js";
import { adGetCards,adCreate,adUpdate,adDeleteCard, adGetByID } from "../routescontroller/admincontroller.js";

const routes=express.Router()

//customer routes
routes.get("/",getCards);
routes.put("/:id",updateState);


//admin routes
routes.get("/admin",adGetCards);
routes.get("/admin/:id",adGetByID);
routes.post("/admin/create",adCreate);
routes.put("/admin/:id",adUpdate);
routes.delete("/admin/:id",adDeleteCard);

export default routes
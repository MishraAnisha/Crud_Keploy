import express from "express";
import { create, fetch, update, deleteUser } from "../controller/usercontroller.js";

const route = express.Router();

route.post("/create", create);
route.get("/getAllusers", fetch);
route.put("/update/:id", update);
route.delete("/delete/:id", deleteUser);

export default route;
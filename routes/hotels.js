import express from "express";
import { getHotel, createHotel, deleteHotel, updateHotel, allHotels } from "../controllers/hotel.js";

const router = express.Router();

// create
router.post("/new", createHotel);

// update
router.put("/update/:id", updateHotel);

// delete
router.delete("/delete/:id", deleteHotel);

// get hotel
router.get("/:id", getHotel);

// all hotels
router.get("/", allHotels);

export default router;
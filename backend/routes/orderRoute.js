import express from "express"
import authMiddleware from "../middleware/auth.js"
import { placeOrder, usersOrders, verifyOrder } from "../controllers/orderController.js"

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware, placeOrder);
orderRouter.post("/verify", verifyOrder);
orderRouter.post("/userorders", authMiddleware, usersOrders);

export default orderRouter;
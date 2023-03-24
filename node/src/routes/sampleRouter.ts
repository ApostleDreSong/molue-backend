import { Router } from "express";
import authenticate from "@middlewares/authenticate";

const vehicleRouter = Router();

vehicleRouter.use(authenticate)

// Get all items
vehicleRouter.get('/', (req, res) => {
});

// Get an item by ID
vehicleRouter.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
});

// Add a new item
vehicleRouter.post('/', (req, res) => {
    const data = req.body;
});

// Update an existing item
vehicleRouter.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
});

// Delete an item by ID
vehicleRouter.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
});


export default vehicleRouter
import { Router } from "express";
import authenticate from "@middlewares/authenticate";

const locationRouter = Router();

locationRouter.use(authenticate)

// Get all items
locationRouter.get('/', (req, res) => {
});

// Get an item by ID
locationRouter.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
});

// Add a new item
locationRouter.post('/', (req, res) => {
    const data = req.body;
});

// Update an existing item
locationRouter.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
});

// Delete an item by ID
locationRouter.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
});


export default locationRouter
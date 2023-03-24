import { Router } from "express";
import authenticate from "@middlewares/authenticate";

const tripRouter = Router();

tripRouter.use(authenticate)

// Get all items
tripRouter.get('/', (req, res) => {
});

// Get an item by ID
tripRouter.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
});

// Add a new item
tripRouter.post('/', (req, res) => {
    const data = req.body;
});

// Update an existing item
tripRouter.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
});

// Delete an item by ID
tripRouter.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
});


export default tripRouter
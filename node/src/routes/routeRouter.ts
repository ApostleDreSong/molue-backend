import { Router } from "express";
import authenticate from "@middlewares/authenticate";

const routeRouter = Router();

routeRouter.use(authenticate)

// Get all items
routeRouter.get('/', (req, res) => {
});

// Get an item by ID
routeRouter.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
});

// Add a new item
routeRouter.post('/', (req, res) => {
    const data = req.body;
});

// Update an existing item
routeRouter.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
});

// Delete an item by ID
routeRouter.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
});


export default routeRouter
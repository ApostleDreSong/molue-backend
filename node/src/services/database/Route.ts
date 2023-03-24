import { IRoute, IRouteData, IRouteModel, IUpdateRouteData } from '@types';
import { Schema, model } from 'mongoose';


// Create the schema
const routeSchema = new Schema<IRoute, IRouteModel>({
    name: {
        type: String,
        required: true
    },
    distance: {
        type: Number,
        required: true
    },
    distanceUnit: {
        type: String,
        required: true
    },
    start: {
        type: Schema.Types.ObjectId,
        ref: 'Location',
        required: true
    },
    end: {
        type: Schema.Types.ObjectId,
        ref: 'Location',
        required: true
    }
});

// Define the static methods
routeSchema.statics = {
    createRoute: async function createRoute(routeData: IRouteData[]): Promise<IRoute[]> {
        const route = this.create(routeData);
        return route;
    },
    updateRoute: async function updateRoute(id: string, routeData: IUpdateRouteData): Promise<IRoute | null> {
        const route = await this.findById(id);
        if (!route) {
            return null;
        }
        const updatedRoute = { ...route, ...routeData }
        await updatedRoute.save();
        return updatedRoute;
    },

    getRoute: async function getRoute(id: string): Promise<IRoute | null> {
        const trip = await this.findById(id).populate(["start", "end"]);
        return trip ? trip.toObject() : null;
    },

    deleteRoute: async function deleteRoute(id: string): Promise<boolean> {
        const result = await this.deleteOne({ _id: id });
        return result.deletedCount === 1;
    }
}

// Create the model
const RouteModel = model<IRoute, IRouteModel>('Route', routeSchema);

export default RouteModel;
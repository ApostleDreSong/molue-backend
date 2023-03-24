import mongoose, { Model, Schema } from "mongoose";
import { IUpdateVehicleData, IVehicle, IVehicleData, IVehicleModelType } from "@types";

// type VehicleModelType = Model<IVehicle, {}, IVehicleMethods>;

const vehicleSchema = new Schema<IVehicle, IVehicleModelType>({
    name: {
        type: String,
        required: true,
    },
    regNumber: {
        type: String,
        required: true
    },
    VIN: {
        type: String,
        required: true,
        unique: true
    }
});

vehicleSchema.methods = {
    createVehicle: async function createVehicle(vehicleDetails: IVehicleData[]): Promise<IVehicle[]> {
        const res = await this.create(vehicleDetails);
        return res
    },
    updateVehicle: async function updateVehicle(id: string, vehicleData: IUpdateVehicleData): Promise<IVehicle | null> {
        const vehicle = await this.findById(id);
        if (!vehicle) {
            return null;
        }
        const updatedVehicle = { ...vehicle, ...vehicleData }
        await updatedVehicle.save();
        return updatedVehicle;
    },

    getVehicle: async function getVehicle(id: string): Promise<IVehicle | null> {
        const trip = await this.findById(id);
        return trip ? trip.toObject() : null;
    },

    deleteVehicle: async function deleteVehicle(id: string): Promise<boolean> {
        const result = await this.deleteOne({ _id: id });
        return result.deletedCount === 1;
    }
}

const UserModel = mongoose.model<IVehicle, IVehicleModelType>('Vehicle', vehicleSchema);

UserModel.syncIndexes();

export default UserModel
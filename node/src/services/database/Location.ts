import { ILocation, ILocationData, IUpdateLocationData, IlocationModel } from '@types';
import { Document, Schema, model } from 'mongoose';

// Define interface for the documen

// Create the schema
const locationSchema = new Schema<ILocation, IlocationModel>({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  }
});


// Define the static methods
locationSchema.statics = {
  createLocation: async function createLocation(locationData: ILocationData[]): Promise<ILocation[]> {
    const location = this.create(locationData);
    return location;
  },
  updateLocation: async function updateLocation(id: string, locationData: IUpdateLocationData): Promise<ILocation | null> {
    const location = await this.findById(id);
    if (!location) {
      return null;
    }
    const updatedLocation = { ...location, ...locationData }
    await updatedLocation.save();
    return updatedLocation;
  },
  deleteLocation: async function deleteLocation(id: string): Promise<boolean> {
    const result = await this.deleteOne({ _id: id });
    return result.deletedCount === 1;
  }
}
// Create the model
const LocationModel = model<ILocation, IlocationModel>('Location', locationSchema);

export default LocationModel;
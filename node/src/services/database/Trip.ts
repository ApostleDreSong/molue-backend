import { ITrip, ITripData, ITripModel } from '@types';
import { Schema, model } from 'mongoose';

// Create the schema
const tripSchema = new Schema<ITrip, ITripModel>({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  route: {
    type: Schema.Types.ObjectId,
    ref: 'Route',
    required: true
  }
});

// Define the static methods
tripSchema.statics = {
  createTrip: async function createTrip(tripData: ITripData[]): Promise<ITrip[]> {
    const trip = this.create(tripData);
    return trip;
  },

  updateTrip: async function updateTrip(id: string, tripData: ITripData): Promise<ITrip | null> {
    const trip = await this.findById(id);
    if (!trip) {
      return null;
    }
    const updatedTrip = { ...trip, ...tripData }
    await updatedTrip.save();
    return updatedTrip;
  },

  getTrip: async function getTrip(id: string): Promise<ITrip | null> {
    const trip = await this.findById(id).populate('route');
    return trip ? trip.toObject() : null;
  },

  deleteTrip: async function deleteTrip(id: string): Promise<boolean> {
    const result = await this.deleteOne({ _id: id });
    return result.deletedCount === 1;
  }

}

// Create the model
const TripModel = model<ITrip, ITripModel>('Trip', tripSchema);

export default TripModel;
import { SignOptions } from "jsonwebtoken";
import { Document, Model, Schema, Types } from "mongoose";

export interface ISignData {
    data: string | object | Buffer,
    jwtOptions: SignOptions | undefined
}

export interface IUserEmail {
    email: string;
}

export interface ISignIn {
    email: string;
    password: string;
}

export interface IHashData {
    value: string | Buffer;
}

export interface IHashCompareData {
    password: string;
    hash: string
}

export interface IError {
    statusCode: number,
    errorMessage: string
}

//User

export type IUser = IUserData & Document

export interface IUserData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface IUpdateUserData {
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
}

export interface IUserNoPassword {
    firstName: string;
    lastName: string;
    email: string;
}

export interface IUserCreateData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface IUserModelType extends Model<IUser> {
    createUser(userDetails: IUserCreateData[]): Promise<IUser[]>,
    updateUser(id: string, userDetails: IUpdateUserData): Promise<IUser>,
    getUser(id: string): Promise<IUser | null>,
    returnUserDetails(email: string): Promise<IUserNoPassword>,
    returnUserPassword(email: string): Promise<string>
}

// Vehicle

export type IVehicle = IVehicleData & Document

export interface IVehicleData {
    name: string;
    regNumber: string;
    VIN: string;
}

export interface IUpdateVehicleData {
    name?: string;
    regNumber?: string;
    VIN?: string;
}

export interface IVehicleModelType extends Model<IVehicle> {
    createVehicle(details: IVehicleData[]): Promise<any[]>,
    updateVehicle(id: string, vehicleData: IUpdateVehicleData): Promise<IVehicle | null>,
    getVehicle(id: string): Promise<IVehicle | null>,
    deleteVehicle(id: string): Promise<boolean>
}

// Trip

export type ITrip = ITripData & Document

export interface ITripData {
    name: string;
    date: Date;
    route: IRoute['_id'];
}

export interface IUpdateTripData {
    name?: string;
    date?: Date;
    route?: IRoute['_id'];
}

export interface ITripModel extends Model<ITrip> {
    createTrip(tripData: ITripData[]): Promise<ITrip[]>,
    updateTrip(id: string, tripData: IUpdateTripData): Promise<ITrip | null>,
    getTrip(id: string): Promise<ITrip | null>,
    deleteTrip(id: string): Promise<boolean>
}

// Location

export type ILocation = ILocationData & Document

export interface ILocationData {
    name: string;
    address: string;
}
export interface IUpdateLocationData {
    name?: string;
    address?: string;
}

export interface IlocationModel extends Model<ILocation> {
    createLocation(locationData: ILocationData[]): Promise<ILocation[]>,
    updateLocation(id: string, locationData: IUpdateLocationData): Promise<ILocation | null>,
    deleteLocation(id: string): Promise<boolean>
}

// Route

export interface IRouteData {
    name: string;
    distance: number;
    distanceUnit: 'km' | 'miles';
    start: ITrip['_id'];
    end: ITrip['_id'];
}

export interface IUpdateRouteData {
    name?: string;
    distance?: number;
    distanceUnit?: 'km' | 'miles';
    start?: ITrip['_id'];
    end?: ITrip['_id'];
}

export type IRoute = IRouteData & Document

export interface IRouteModel extends Model<IRoute> {
    createRoute(routeData: IRouteData[]): Promise<IRoute[]>,
    updateRoute(id: string, tripData: IUpdateRouteData): Promise<IRoute | null>,
    getRoute(id: string): Promise<IRoute | null>,
    deleteRoute(id: string): Promise<boolean>
}
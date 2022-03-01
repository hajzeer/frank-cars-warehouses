import { ReactNode } from "react";

export interface IArrayItems {
    readonly _id: number,
    readonly name: string,
    readonly location_lat: number,
    readonly location_long: number,
    readonly cars_location: string,
    readonly cars_vehicles__id: number,
    readonly cars_vehicles_make: string,
    readonly cars_vehicles_model: string,
    readonly cars_vehicles_year_model: number,
    readonly cars_vehicles_price: number,
    readonly cars_vehicles_licensed: boolean,
    readonly cars_vehicles_date_added: Date,
}

export interface IProps {
    readonly children?: ReactNode,
}
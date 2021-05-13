import { Rental } from "./rental";

export interface RentalResponseModel extends Response{
    data:Rental[];
}
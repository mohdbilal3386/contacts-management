import { LatLngExpression, LatLngTuple } from "leaflet";

export interface CountryData {
  country: string;
  cases: number;
  deaths: number;
  recovered: number;
  active: number;
  lat: number;
  lng: number;
}
export interface MapProps {
  position: LatLngExpression | LatLngTuple;
  zoom?: number;
  countriesData?: CountryData[];
}

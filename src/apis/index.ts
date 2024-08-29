import axios from "axios";
import { CountryData } from "../types/mapTypes";
import { ChartData, FormattedData } from "../types/chartsType";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

/* chart api  */
export const fetchChartData = async (
  endpoint: string
): Promise<FormattedData[]> => {
  const response = await api.get<ChartData>(endpoint);
  const formatChartData = response.data
    ? Object.keys(response.data.cases).map((date) => ({
        name: date,
        cases: response.data.cases[date] as number,
        deaths: response.data.deaths[date] as number,
        recovered: response.data.recovered[date] as number,
      }))
    : [];
  return formatChartData;
};

/* map api */
export const fetchMapData = async (
  endpoint: string
): Promise<CountryData[]> => {
  const response = await api.get<CountryData[]>(endpoint);
  const filteredResponse = response.data
    ? response.data.map((item: any) => ({
        country: item.country,
        cases: item.cases,
        deaths: item.deaths,
        recovered: item.recovered,
        active: item.active,
        lat: item.countryInfo.lat || 0,
        lng: item.countryInfo.long || 0,
      }))
    : [];

  return filteredResponse;
};

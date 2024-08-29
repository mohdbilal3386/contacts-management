import "leaflet/dist/leaflet.css";
import Card from "../components/UI/Card";
import { lazy, Suspense } from "react";
import Chart from "../components/UI/Chart";
import { useQuery } from "@tanstack/react-query";
import { fetchChartData, fetchMapData } from "../apis";
import { FormattedData, LineConfig } from "../types/chartsType";
import { CountryData } from "../types/mapTypes";
import Loader from "../components/UI/Loader";
const Map = lazy(() => import("../components/UI/Map"));

const lineConfigs: LineConfig[] = [
  { key: "cases", stroke: "#4a90e2", name: "Cases" },
  { key: "deaths", stroke: "#e24a4a", name: "Deaths" },
  { key: "recovered", stroke: "#4ae24a", name: "Recovered" },
];

const MapsAndCharts = () => {
  const {
    data: chartData,
    error: chartError,
    isLoading: chartLoading,
  } = useQuery<FormattedData[], Error>({
    queryKey: ["chartData"],
    queryFn: () => fetchChartData("/historical/all?lastdays=all"),
  });

  const {
    data: countriesData,
    error: countriesError,
    isLoading: countriesLoading,
  } = useQuery<CountryData[]>({
    queryKey: ["countries"],
    queryFn: () => fetchMapData("/countries"),
  });

  const isLoading = chartLoading || countriesLoading;
  const hasError = chartError || countriesError;

  const cards = [
    {
      title: "Map View",
      content: (
        <Suspense fallback={<Loader />}>
          {isLoading ? (
            <Loader />
          ) : hasError ? (
            <div className="text-red-500">
              Error loading data: {hasError.message}
            </div>
          ) : (
            <Map
              position={
                countriesData && countriesData.length > 0
                  ? [countriesData[0].lat, countriesData[0].lng]
                  : [4.79029, -75.69003]
              }
              countriesData={countriesData}
            />
          )}
        </Suspense>
      ),
    },
    {
      title: "COVID-19 Metrics",
      content: (
        <>
          {isLoading ? (
            <Loader />
          ) : hasError ? (
            <div className="text-red-500">
              Error loading data: {hasError.message}
            </div>
          ) : (
            chartData && <Chart data={chartData} lines={lineConfigs} />
          )}
        </>
      ),
    },
  ];

  return (
    <div className="bg-gray-800 p-6 h-full rounded-lg">
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {cards.map((card, index) => (
          <Card key={index} title={card.title} content={card.content} />
        ))}
      </div>
    </div>
  );
};

export default MapsAndCharts;

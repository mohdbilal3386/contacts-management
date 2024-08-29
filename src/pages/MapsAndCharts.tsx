import "leaflet/dist/leaflet.css";
import Card from "../components/UI/Card";
import { lazy, Suspense } from "react";
import Chart from "../components/UI/Chart";
import { useQuery } from "@tanstack/react-query";
import { fetchChartData } from "../apis";
import { ChartData, FormattedData, LineConfig } from "../types/chartsType";
const Map = lazy(() => import("../components/UI/Map"));

export const formatChartData = (data: ChartData): FormattedData[] => {
  return data.cases
    ? Object.keys(data.cases).map((date) => ({
        name: date,
        cases: data.cases[date] as number,
        deaths: data.deaths[date] as number,
        recovered: data.recovered[date] as number,
      }))
    : [];
};

const lineConfigs: LineConfig[] = [
  { key: "cases", stroke: "#4a90e2", name: "Cases" },
  { key: "deaths", stroke: "#e24a4a", name: "Deaths" },
  { key: "recovered", stroke: "#4ae24a", name: "Recovered" },
];
const MapsAndCharts = () => {
  const { data, error, isLoading } = useQuery<ChartData, Error>({
    queryKey: ["chartData"],
    queryFn: () => fetchChartData("/historical/all?lastdays=all"),
  });
  console.log({ data });

  const formattedData: FormattedData[] = data ? formatChartData(data) : [];
  const cards = [
    {
      title: "Map View",
      content: (
        <Suspense fallback={<div>Loading map...</div>}>
          <Map posix={[4.79029, -75.69003]} />
        </Suspense>
      ),
    },
    {
      title: "COVID-19 Metrics",
      content: (
        <>
          {isLoading && <div>Loading chart...</div>}
          {error && <div>Error loading chart data: {error.message}</div>}
          {data && <Chart data={formattedData} lines={lineConfigs} />}
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

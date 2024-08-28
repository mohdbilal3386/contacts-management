import "leaflet/dist/leaflet.css";
import Card from "../components/UI/Card";
import { lazy, Suspense } from "react";
import Chart from "../components/UI/Chart";
const Map = lazy(() => import("../components/UI/Map"));

const MapsAndCharts = () => {
  const cards = [
    {
      title: "Card 1",
      content: (
        <Suspense fallback={""}>
          <Map posix={[4.79029, -75.69003]} />
        </Suspense>
      ),
    },
    {
      title: "Card 2",
      content: <Chart />,
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

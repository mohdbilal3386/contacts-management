import Card from "../components/UI/Card";

const MapsAndCharts = () => {
  const cards = [
    {
      title: "Card 1",
      content:
        "This is the content for card 1. It has some text to show in the card.",
    },
    {
      title: "Card 2",
      content:
        "This is the content for card 2. It also has some text to display.",
    },
  ];
  return (
    <div className="bg-gray-800 p-6  rounded-lg">
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {cards.map((card, index) => (
          <Card key={index} title={card.title} content={card.content} />
        ))}
      </div>
    </div>
  );
};

export default MapsAndCharts;

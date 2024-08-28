interface CardProps {
  title: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="bg-gray-700 text-white rounded-lg shadow-md p-6 flex flex-col justify-between">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Card;

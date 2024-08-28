interface CardProps {
  children?: React.ReactNode;
  title: string;
  content: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="bg-gray-700 text-white rounded-lg shadow-md p-6 flex flex-col justify-between">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className=" flex-1">{content}</div>
    </div>
  );
};

export default Card;

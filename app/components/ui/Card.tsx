interface CardProps {
    title: string;
    text: string;
    svg: string;
  }
  
  const Card: React.FC<CardProps> = ({ title, text, svg }) => {
    return (
      <div className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <img
          src={svg}
          alt={title}
          className="w-full h-32 object-cover rounded-t-lg mb-4"
        />
        <h3 className="text-xl font-semibold text-yellowLight mb-2">{title}</h3>
        <p className="text-gray-600">{text}</p>
      </div>
    );
  }
  
  export default Card;
  
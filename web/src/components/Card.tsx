interface CardProps {
  route: number;
  destination: string;
  estimatedArrival: number;
}

const Card: React.FC<CardProps> = ({
  route,
  destination,
  estimatedArrival,
}) => {
  return (
    <div
      className='Card'
      style={{ backgroundColor: estimatedArrival > 1 ? '#fff' : '#649812' }}
    >
      <div className='Card__Header'>
        <b>{route}</b>
      </div>
      <div className='Card__Details'>
        <div>To {destination}</div>
        <div>{estimatedArrival > 1 ? `${estimatedArrival} mins` : 'Due'}</div>
      </div>
    </div>
  );
};

export default Card;

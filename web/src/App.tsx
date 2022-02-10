import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from './components/Card';
import { BusTime } from './types';

interface Props {}

const App: React.FC<Props> = () => {
  const [busTimes, setBusTimes] = useState<BusTime[]>([]);

  useEffect(() => {
    const fetchTimes = async () => {
      const response = await axios({
        method: `GET`,
        url: `http://localhost:3000/bus-times`,
      });

      const newTimes: BusTime[] = response.data;
      newTimes.sort((a, b) => a.minutesUntilArrival - b.minutesUntilArrival);

      setBusTimes(newTimes);
    };

    if (busTimes.length === 0) fetchTimes();
    else setTimeout(fetchTimes, 10000);
  }, [busTimes]);

  return (
    <div className='App'>
      <div className='Cards'>
        <div>
          Live bus times for <b>Park Road</b>
        </div>
        {busTimes.length > 0
          ? busTimes.map((busTime) => (
              <Card
                key={busTime.id}
                route={busTime.busId}
                destination={busTime.destination}
                estimatedArrival={busTime.minutesUntilArrival}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default App;

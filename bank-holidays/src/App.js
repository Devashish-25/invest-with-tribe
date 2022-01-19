import './App.css';
import { useEffect, useState } from 'react';
import DatePicker from './Components/DatePicker/DatePicker';
import axios from 'axios';
import Holidays from './Components/Holidays/Holidays';

const fetchData = async (setHolidays) => {
    const res = await axios.get('https://www.gov.uk/bank-holidays.json');
    setHolidays(res.data);
}

function App() {

  const [state, setState ] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  })

  const [holidays, setHolidays] = useState({});

  const handleChange = (item) => {
      setState(item.selection)
  }
  
  useEffect(() => {
    fetchData(setHolidays);
  }, [])

  return (
    <div className="d-flex flex-column justify-content-center mt-5">
      <h1 className='text-center'>Bank Holidays</h1>
      <DatePicker 
        range={state}
        handleChange={handleChange}
      />
      <Holidays
        data={holidays}
        startDate={state.startDate}
        endDate={state.endDate}
      />
    </div>
    
  );
}

export default App;

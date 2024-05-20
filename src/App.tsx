import AutoComplete from '@/components/AutoComplete';
import { useState } from 'react';
import top100FilmsData from '../public/top100Films.json';

function App() {
  const [arraySelectedValue, setArraySelectedValue] = useState('');
  const [options] = useState(top100FilmsData);

  return (
    <>
      <AutoComplete
        value={arraySelectedValue}
        options={options}
        onChange={(value) => setArraySelectedValue(value)}
      />
    </>
  );
}

export default App;

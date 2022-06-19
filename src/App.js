import SectionedList from './components/SectionedList';
import useInput from './hooks/useInput';

import './App.css';

function App() {
  const [filter, filterInput] = useInput({ placeholder: 'filter' });
  
  return (
    <div className="App">
      {filterInput}
      <SectionedList filter={filter} />
    </div>
  );
}

export default App;

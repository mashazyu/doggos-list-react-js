import SectionedList from './components/SectionedList';
import useInput from './hooks/useInput';
import useSelection from './hooks/useSelection';
import './App.css';

function App() {
  const [filter, filterInput] = useInput();
  const [grouping, selectionInput] = useSelection();

  return (
    <div className="App">
      {filterInput}
      {selectionInput}
      <SectionedList grouping={grouping} filter={filter} />
    </div>
  );
}

export default App;

import { useState } from 'react';

function useSelection() {
  const [value, setValue] = useState('name');
  const handleSelection = (e) => setValue(e.target.value);
  const selection =  <select value={value} onChange={handleSelection}>
    <option value="name">Name</option>
    <option value="company">Company</option>
    <option value="country">Country</option>
  </select>

  return [value, selection];
}

export default useSelection;

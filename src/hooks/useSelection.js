import { useState } from 'react';
import { Select } from '@chakra-ui/react';

function useSelection() {
  const [value, setValue] = useState('name');
  const handleSelection = (e) => setValue(e.target.value);
  const selection = <Select value={value} onChange={handleSelection}>
    <option value="name">Name</option>
    <option value="company">Company</option>
    <option value="country">Country</option>
  </Select>

  return [value, selection];
}

export default useSelection;

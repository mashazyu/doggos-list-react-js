import { useState } from 'react';

function useInput() {
  const [value, setValue] = useState('');
  const input = <input
    value={value}
    onChange={e => setValue(e.target.value)}
    placeholder='filter' />

  return [value, input];
}

export default useInput;

import { useState } from 'react';
import { Input } from '@chakra-ui/react';

function useInput() {
  const [value, setValue] = useState('');
  const input = <Input
    value={value}
    onChange={e => setValue(e.target.value)}
    placeholder='Filter' />

  return [value, input];
}

export default useInput;

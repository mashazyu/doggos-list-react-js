import React, { useState } from 'react';

function useInput(opts) {
  const [value, setValue] = React.useState('');
  const input = <input
    value={value}
    onChange={e => setValue(e.target.value)}
    {...opts} />

  return [value, input];
}

export default useInput;

import { Flex, Spacer, Text } from '@chakra-ui/react';

import SectionedList from './components/SectionedList';
import useInput from './hooks/useInput';
import useSelection from './hooks/useSelection';

function App() {
  const [filter, filterInput] = useInput();
  const [grouping, selectionInput] = useSelection();

  return (
    <Flex direction="column" p='5%' w='90%'>
      <Flex pb='5%'>
        {filterInput}
        <Spacer />
        <Text pl='5%' pr='5%' w='100%'>Group by:</Text>
        <Spacer />
        {selectionInput}
      </Flex>
      <SectionedList grouping={grouping} filter={filter} />
    </Flex>
  );
}

export default App;

import { Flex, Text, SimpleGrid } from '@chakra-ui/react';

import { DataContextProvider } from './contexts/DataContext';
import SectionedList from './components/SectionedList';
import useInput from './hooks/useInput';
import useSelection from './hooks/useSelection';

function App() {
  const [filter, filterInput] = useInput();
  const [grouping, selectionInput] = useSelection();

  return (
    <DataContextProvider>
      <Flex direction="column" p='5%' w='100%'>
        <SimpleGrid minChildWidth='250px' spacing='40px' pb='5%'>
          {filterInput}
          <Flex>
            <Text minWidth='100px'>Group by:</Text>
            {selectionInput}
          </Flex>
        </SimpleGrid>
        <SectionedList grouping={grouping} filter={filter} />
      </Flex>
    </DataContextProvider>
  );
}

export default App;

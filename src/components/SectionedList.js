import { Box, Flex, Heading, SimpleGrid } from '@chakra-ui/react';
import SubList from './SubList';
import { getSectionedList } from '../helpers';

function SectionedList({ grouping, filter }) {
  const data = getSectionedList(grouping, filter);
  const listItems = data.map(({ title, items}) => {
    return (
      <Flex justify='flex-start' key={title}>
        <Box pr='15%'>
          <Heading>{title}</Heading>
        </Box>
        <SubList data={items} />
      </Flex>
    );
  });
  const errorMessage = <p>No entries found</p>;

  return (
    <SimpleGrid columns={2} spacing={20}>
      {listItems.length !== 0 ? listItems : errorMessage}
    </SimpleGrid>
  );
}

export default SectionedList;

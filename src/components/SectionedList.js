import { Box, Flex, Heading, SimpleGrid } from '@chakra-ui/react';
import SubList from './SubList';
import { getSectionedList } from '../helpers';

function SectionedList({ grouping, filter }) {
  const data = getSectionedList(grouping, filter);
  const listItems = data.map(({ title, items}) => {
    return (
      <Flex justify='flex-start' key={title} maxWidth='300px'>
        <Box pr='15%'>
          <Heading>{title}</Heading>
        </Box>
        <SubList data={items} />
      </Flex>
    );
  });
  const errorMessage = <p>No entries found</p>;

  return (
    <SimpleGrid minChildWidth='250px' spacing='100px'>
      {listItems.length !== 0 ? listItems : errorMessage}
    </SimpleGrid>
  );
}

export default SectionedList;

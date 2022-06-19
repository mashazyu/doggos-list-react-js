import React, { useContext } from "react";
import { Box, Flex, Heading, SimpleGrid, Spinner  } from '@chakra-ui/react';

import { DataContext } from '../contexts/DataContext';
import SubList from './SubList';
import { getSectionedList } from '../helpers';

function SectionedList({ grouping, filter }) {
  const data = useContext(DataContext);

  if (data.length === 0) {
    return <Spinner />
  }

  const groupedData = getSectionedList(data, grouping, filter);
  const listItems = groupedData.map(({ title, items}) => {
    return (
      <Flex justify='flex-start' key={title} maxWidth='300px'>
        <Box pr='10%'>
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

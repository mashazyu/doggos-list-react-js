import { Flex, Heading, List, ListItem, Tag } from '@chakra-ui/react';

function SubList({ data }) {
  const listItems = data.map(({ guid, name, company, country }) =>
    <ListItem key={guid}>
      <Flex justify='space-between' pb='5%'>
        <Heading pr='5%' size='sm'>{name}</Heading>
        <Tag>{country}</Tag>
      </Flex>
      {company}
    </ListItem>
  );

  return (
    <List spacing={6} w='100%'>{listItems}</List>
  );
}

export default SubList;

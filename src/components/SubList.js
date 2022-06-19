import { Box, Flex, Heading, Image, List, ListItem, Tag, Text } from '@chakra-ui/react';

function SubList({ data }) {
  const listItems = data.map(({ guid, name, company, country, image }) =>
    <ListItem key={guid}>
      <Flex justify='space-between' pb='5%'>
        <Image
          boxSize='80px'
          borderRadius='20px'
          objectFit='cover'
          mr='5%'
          src={image}
          alt={name}
        />
        <Box>
          <Tag mb='7%'>{country}</Tag>
          <Heading pr='3%' size='sm'>Doggo {name}</Heading>
        </Box>
      </Flex>
      <Text>Manages stress at "{company}"</Text>
    </ListItem>
  );

  return (
    <List spacing={6} w='100%'>{listItems}</List>
  );
}

export default SubList;

import { faker } from '@faker-js/faker';

const DOG_IMAGES = [
  'https://images.dog.ceo/breeds/collie-border/n02106166_7454.jpg',
  'https://images.dog.ceo/breeds/terrier-norfolk/n02094114_3864.jpg',
  'https://images.dog.ceo/breeds/hound-walker/n02089867_2267.jpg'
]

export const getMockedData = (images) => images
    .map(image => ({
      guid: faker.datatype.uuid(),
      name: faker.name.findName(),
      company: faker.company.companyName(),
      country: faker.address.country(),
      image
    }));

export const getImages = (data) => data
    .map((item, i) => ({
      guid: item.id,
      name: item.name,
      company: item.company,
      country: faker.address.country(),
      image: DOG_IMAGES[i%3]
    }));

const getFilteredData = (data, grouping, rawFilter) => {
  const filter = rawFilter.toLowerCase();

  return data
    .filter(item => item[grouping].toLowerCase().includes(filter))
    .map(item => ({ ...item, title: item[grouping][0] }));
}

const sortSectionByGrouping = (items, grouping) =>
  items.sort((a, b) => a[grouping].localeCompare(b[grouping]));

const sort = (items, grouping) => items
  .sort((a, b) => a.title.localeCompare(b.title))
  .map(({ title, items }) =>
    ({ title, items: sortSectionByGrouping(items, grouping) }));


const groupBySection = (items) => items.reduce((result, item) => {
  const { title } = item;
  const existingSection = result.find(s => s.title === title);

  if (existingSection) {
      existingSection.items.push(item);
  } else {
      result.push({ title, items: [item]})
  }

  return result;
},[]);

export const getSectionedList = (data, grouping, filter) => {
  const filteredData = getFilteredData(data, grouping, filter);
  const sectionedList = groupBySection(filteredData);

  return sort(sectionedList, grouping);
}

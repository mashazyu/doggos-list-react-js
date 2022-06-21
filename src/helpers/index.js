import { faker } from '@faker-js/faker';

export const getMockedData = (images) => images
    .map(image => ({
      guid: faker.datatype.uuid(),
      name: faker.name.findName(),
      company: faker.company.companyName(),
      country: faker.address.country(),
      image
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

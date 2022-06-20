import { faker } from '@faker-js/faker';

export const getMockedData = (images) => images
    .slice(0, 50) // takes the first 50 array elements
    .map(image => ({
      guid: faker.datatype.uuid(),
      name: faker.name.findName(),
      company: faker.company.companyName(),
      country: faker.address.country(),
      image
    }));

const getFilteredData = (data, grouping, rawFilter) => {
  const filter = rawFilter.toLowerCase();

  return data.filter(item => item[grouping].toLowerCase().includes(filter));
}

const getFirstLetter = (grouping, data) =>
  new Set(
    data
      .map(item => item[grouping].charAt(0))
      .sort()
  );

const sortByGrouping = (items, grouping) =>
  items.sort((a, b) => a[grouping].localeCompare(b[grouping]));

export const getSectionedList = (data, grouping, filter) => {
  const filteredData = getFilteredData(data, grouping, filter);
  const sectionTitles = getFirstLetter(grouping, filteredData);
  const sections = Array.from(sectionTitles).map(title => {
    const items = sortByGrouping(
      filteredData.filter((item) => item[grouping].charAt(0) === title),
      grouping
    );

    return { title, items };
  });

  return sections;
};

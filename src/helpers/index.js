import rawData from '../data/index.js';

const getFilteredData = (rawFilter) => {
  const filter = rawFilter.toLowerCase();

  return rawData.filter(({ name, company, country }) => {
    return name.toLowerCase().includes(filter)
      || company.toLowerCase().includes(filter)
      || country.toLowerCase().includes(filter);
  });
}

const getFirstLetter = (data) => new Set(data.map(({ name }) => name.charAt(0)));

export const getSectionedList = (filter) => {
  const filteredData = getFilteredData(filter);
  const sectionTitles = getFirstLetter(filteredData);
  const sections = Array.from(sectionTitles).map((title) => {
    const items = filteredData.filter(({ name }) => name.charAt(0) === title);

    return { title, items };
  });

  return sections;
};

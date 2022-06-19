import rawData from '../data/index.js';

const getFilteredData = (grouping, rawFilter) => {
  const filter = rawFilter.toLowerCase();

  return rawData.filter(item => item[grouping].toLowerCase().includes(filter));
}

const getFirstLetter = (grouping, data) =>
  new Set(data
    .map((item) => item[grouping].charAt(0))
    .sort()
  );

export const getSectionedList = (grouping, filter) => {
  const filteredData = getFilteredData(grouping, filter);
  const sectionTitles = getFirstLetter(grouping, filteredData);
  const sections = Array.from(sectionTitles).map((title) => {
    const items = filteredData.filter((item) => item[grouping].charAt(0) === title);

    return { title, items };
  });

  return sections;
};

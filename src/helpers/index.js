import data from '../data/index.js';

const getFirstLetter = () => new Set(data.map(({ name }) => name.charAt(0)));

export const getSectionedList = () => {
  const sectionTitles = getFirstLetter();
  const sections = Array.from(sectionTitles).map((title) => {
    const items = data.filter(({ name }) => name.charAt(0) === title);

    return { title, items };
  });

  return sections;
};

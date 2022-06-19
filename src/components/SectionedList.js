import './SectionedList.css';
import List from './List';
import { getSectionedList } from '../helpers';

function SectionedList({ grouping, filter }) {
  const data = getSectionedList(grouping, filter);
  const listItems = data.map(({ title, items}) => {
    return (
      <div key={title}>
        <p>{title}</p>
        <List data={items} />
      </div>
    );
  });
  const errorMessage = <p>No entries found</p>;

  return (
    <div>
      {listItems.length !== 0 ? listItems : errorMessage}
    </div>
  );
}

export default SectionedList;

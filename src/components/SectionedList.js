import './SectionedList.css';
import List from './List';
import { getSectionedList } from '../helpers';

function SectionedList({ filter }) {
  const data = getSectionedList(filter);
  const listItems = data.map(({ title, items}) => {
    return (
      <div key={title}>
        <p>{title}</p>
        <List data={items} />
      </div>
    );
  });

  return (
    <div>
      {listItems}
    </div>
  );
}

export default SectionedList;

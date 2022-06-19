import './List.css';
import { getSectionedList } from '../helpers';

function List({ data }) {
  const listItems = data.map(({ guid, name, date, company }) =>
    (<li key={guid}>{name} {date} {company}</li>)
  );

  return (
    <ul className="List">{listItems}</ul>
  );
}

export default List;

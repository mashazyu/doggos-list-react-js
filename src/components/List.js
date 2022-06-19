import data from '../data/index.js';
import './List.css';

function List() {
  const listItems = data.map(({ guid, name, date, company }) =>
    (<li key={guid}>{name} {date} {company}</li>)
  );

  return (
    <ul className="List">{listItems}</ul>
  );
}

export default List;

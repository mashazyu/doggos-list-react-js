import './List.css';

function List({ data }) {
  const listItems = data.map(({ guid, name, company, country }) =>
    <li key={guid}>{name} {company} {country}</li>
  );

  return (
    <ul className="List">{listItems}</ul>
  );
}

export default List;

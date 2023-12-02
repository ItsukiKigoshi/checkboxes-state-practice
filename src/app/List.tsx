export default function List(props: {
  items: { id: number; name: string; checked: boolean }[];
}) {
  const filteredItems = props.items.filter((item) => item.checked);
  if (filteredItems.length > 0) {
    return (
      <div>
        {filteredItems.map((item) => (
          <div key={item.id}>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    );
  } else {
    return <div>No items selected</div>;
  }
}

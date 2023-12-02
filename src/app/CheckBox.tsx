export default function CheckBox(props: {
  items: { id: number; name: string; checked: boolean }[];
  toggleChecked: (id: number) => () => void;
}) {
  return (
    <div>
      {props.items.map((item) => (
        <div key={item.id}>
          <input
            type="checkbox"
            checked={item.checked}
            onChange={props.toggleChecked(item.id)}
          />
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
}

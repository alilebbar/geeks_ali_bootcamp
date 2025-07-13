
type ListProps<T> = {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
};

export default function List<T>({ items, renderItem }: ListProps<T>) {
  return (
    <div>
      <h2>List</h2>
      {items.map((item, index) => (
        <div key={index}>{renderItem(item)}</div>
      ))}
    </div>
  );
}

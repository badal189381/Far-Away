function Stats({items}) {
  const numsItems = items.lenght;
  return (
    <footer className="stats">
      <em>You have {numsItems}on your list, and you already packed X(X%);</em>
    </footer>
  );
}
export default Stats;

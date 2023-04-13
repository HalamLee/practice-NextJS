export default function List() {
  let products = ['Tomatoes', 'Pasta', 'Coconut'];

  return (
    <div>
      <h4 className="title">상품목록</h4>
      {products.map((item, idx) => {
        return (
          <div className="food" key={idx}>
            <img src={`/food${idx}.png`} className="food-img" />
            <h4>{item} $40</h4>
          </div>
        );
      })}
    </div>
  );
}

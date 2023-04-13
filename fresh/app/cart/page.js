export default function Cart() {
  let cartItems = ['Tomatoes', 'Pasta'];

  return (
    <div>
      <h4 className="title">Cart</h4>
      {cartItems.map((item) => {
        return <CartItem item={item} />;
      })}
    </div>
  );
}

function CartItem(props) {
  return (
    <div className="cart-item">
      <p>{props.item}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}

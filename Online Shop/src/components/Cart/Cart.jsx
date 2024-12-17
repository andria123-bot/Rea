/* eslint-disable react/prop-types */
import './Cart.css';

const Cart = ({ cart, onClose, onRemove }) => {
  return (
    <div className="cart-overlay">
      <div className="cart">
        <button className="cart-close" onClick={onClose}>
          X
        </button>
        <h2>Your Cart</h2>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price} x {item.quantity}
              <button onClick={() => onRemove(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cart;

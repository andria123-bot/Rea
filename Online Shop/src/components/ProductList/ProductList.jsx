/* eslint-disable react/prop-types */
import './ProductList.css';

const ProductList = ({ products, onBuy, onAddToCart }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <button onClick={() => onBuy(product)}>Buy</button>
          <button onClick={() => onAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

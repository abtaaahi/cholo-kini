// src/components/Cart.js
import React, { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
  });
  const [errors, setErrors] = useState({});

  // Calculate the total amount
  const totalAmount = cartItems.reduce((total, item) => {
    const priceNumber = parseInt(item.price.replace(/[^\d]/g, ''), 10); // Remove currency symbol and convert to integer
    return total + priceNumber * item.quantity; // Calculate total
  }, 0);

  const handlePlaceOrder = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setFormData({
      name: "",
      address: "",
      phone: "",
      email: "",
    });
    setErrors({});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = "This field is required";
      }
    });
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Place order logic (e.g., send to API) can go here
      alert("Order placed successfully!");
      handleCloseModal();
    } else {
      setErrors(validationErrors);
    }
  };

  if (cartItems.length === 0) {
    return <p className="empty-cart">No items in cart.</p>;
  }

  return (
    <div className="cart">
      <h1>Shopping Cart</h1>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} className="cart-item-image" />
          <div className="cart-item-info">
            <h2>{item.name}</h2>
            <p>Price: {item.price}</p> {/* Display price as is */}
            <div className="cart-item-controls">
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
            </div>
            <button onClick={() => removeFromCart(item.id)} className="remove-button">Remove</button>
          </div>
        </div>
      ))}
      <div className="cart-total">
        <h2>Total Amount: ${totalAmount}</h2> {/* Display total amount */}
        <button onClick={handlePlaceOrder} className="place-order-button">Place Order</button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Order Summary</h2>
            <div>
              <h3>Products:</h3>
              {cartItems.map((item) => (
                <p key={item.id}>{item.name} (x{item.quantity})</p>
              ))}
              <h3>Total Amount: ${totalAmount}</h3>
            </div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              {errors.name && <span className="error">{errors.name}</span>}

              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
              {errors.address && <span className="error">{errors.address}</span>}

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
              {errors.phone && <span className="error">{errors.phone}</span>}

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              {errors.email && <span className="error">{errors.email}</span>}

              <button type="submit">Place Order</button>
              <button type="button" onClick={handleCloseModal}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

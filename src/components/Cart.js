import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../contexts/CartContext";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import "./Cart.css";
import Loader from './Loader';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isLoaderLoading, setIsLoaderLoading] = useState(false);

  const [orderTimestamp, setOrderTimestamp] = useState(null);

  const { cartItems, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);

  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isOrderSuccessful, setIsOrderSuccessful] = useState(false);

  const totalAmount = cartItems.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);  

  const handlePlaceOrder = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    if (isOrderSuccessful) {
      clearCart();
    }
    setModalOpen(false);
    setFormData({
      name: "",
      address: "",
      phone: "",
      email: "",
    });
    setErrors({});
    setIsOrderSuccessful(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    if (name === "phone") {
      if (/^\d*$/.test(value) && value.length <= 11) {
        setFormData({
          ...formData,
          [name]: value,
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = "This field is required";
      }
    });

    if (formData.phone && (!/^\d{11}$/.test(formData.phone))) {
      newErrors.phone = "Phone number must be valid and not less than 11 digits";
    }
  
    setErrors(newErrors);
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      const timestamp = new Date().toLocaleString();
      setOrderTimestamp(timestamp);
      setIsLoading(true);
      setIsLoaderLoading(true);
      try {
        const response = await fetch("https://api.backend.sahossain.com/404/api/send-order-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            cartItems,
            totalAmount,
            customerDetails: formData,
            orderTime: timestamp,
          }),
        });

        console.log("Order Time:", timestamp);
        console.log("Cart Items:", cartItems);
        console.log("Total Amount:", totalAmount);
        console.log("Customer Details:", formData);

        if (response.ok) {
          setIsOrderSuccessful(true);
          toast.success("Order placed successfully! Check your email for confirmation.", {
            position: "top-right",
            autoClose: 5000,
          });
        } else {
          toast.error("There was an error placing your order. Please try again.", {
            position: "top-right",
            autoClose: 5000,
          });
        }
      } catch (error) {
        console.error("Error placing order:", error);
        toast.error("Failed to place order.", {
          position: "top-right",
          autoClose: 5000,
        });
      } finally {
        setIsLoading(false);
        setIsLoaderLoading(false);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const generateInvoice = () => {
    if (!orderTimestamp) {
      console.error("Order timestamp not available.");
      return;
    }

    const docDefinition = {
        content: [
            { text: 'Cholo Kini - Order Invoice', style: 'header' },
            { text: `Date: ${orderTimestamp}`, style: 'subheader' },
            {
                table: {
                    widths: ['*', '*'],
                    body: [
                        [{ text: 'Name', bold: true }, formData.name],
                        [{ text: 'Address', bold: true }, formData.address],
                        [{ text: 'Phone', bold: true }, formData.phone],
                        [{ text: 'Email', bold: true }, formData.email],
                    ],
                },
                layout: 'lightHorizontalLines',
            },
            {
                text: 'Order Summary',
                style: 'subheader',
                margin: [0, 20, 0, 8],
            },
            {
                table: {
                    widths: ['*', 'auto', 'auto'],
                    body: [
                        [{ text: 'Product', bold: true }, { text: 'Quantity', bold: true }, { text: 'Price', bold: true }],
                        ...cartItems.map(item => [item.name, item.quantity, `BDT ${(item.price * item.quantity)}`]),
                        [{ text: 'Total', bold: true, colSpan: 2 }, {}, { text: `BDT ${totalAmount}` }],
                    ],
                },
                layout: 'lightHorizontalLines',
            },
        ],
        styles: {
            header: {
                fontSize: 22,
                bold: true,
                margin: [0, 0, 0, 10],
            },
            subheader: {
                fontSize: 16,
                bold: true,
                margin: [0, 10, 0, 5],
            },
        },
    };

    pdfMake.createPdf(docDefinition).download(`Invoice_${orderTimestamp.replace(/[/,:]/g, '-')}.pdf`);
};

  if (cartItems.length === 0) {
    return <p className="empty-cart">No items in cart.</p>;
  }

  return (
    <div className="cart">
      <ToastContainer />
      <h1>Shopping Cart</h1>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <button onClick={() => removeFromCart(item.id)} className="remove-button">
          <i class="fa-solid fa-trash"></i>
        </button>
          <img src={item.image} alt={item.name} className="cart-item-image" />
          <div className="cart-item-info">
            <h2>{item.name}</h2>
            <p>Price: BDT {item.price}</p>
            <div className="cart-item-controls">
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
            </div>
          </div>
        </div>
      ))}
      <div className="cart-total">
        <h2>Total Amount: BDT {totalAmount}</h2>
        <button onClick={handlePlaceOrder} className="place-order-button">Place Order</button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Order Summary</h2>
            <div class="cart-summary">
              {/* <h3>Products:</h3> */}
              <table class="cart-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Price (BDT)</th>
                    <th>Quantity (Piece)</th>
                    <th>Total (BDT)</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td>{item.quantity}</td>
                      <td>{item.price * item.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <h3>Total Amount: BDT {totalAmount}</h3>
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
                placeholder="Delivery Address"
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

              {isLoading ? (
                <div className="loading-spinner">Placing Order...</div>
              ) : isOrderSuccessful ? (
                <button type="button" onClick={generateInvoice} className="download-invoice-button">Download Invoice</button>
              ) : (
                <button type="submit">Place Order</button>
              )}

              <button type="cancel" onClick={handleCloseModal}>Cancel</button>
            </form>
          </div>
          <Loader isVisible={isLoaderLoading} />
        </div>
      )}
        
    </div>
  );
};

export default Cart;
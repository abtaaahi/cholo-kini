import React, { useContext, useState, useEffect, useCallback } from "react";
import { CartContext } from "../contexts/CartContext";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import "./Cart.css";
import Loader from './Loader';
import DeliveryPlan from "./DeliveryPlan";
import logoBase64 from '../data/logoBase64';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isLoaderLoading, setIsLoaderLoading] = useState(false);

  const [orderTimestamp, setOrderTimestamp] = useState(null);

  const { cartItems, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);

  const [isModalOpen, setModalOpen] = useState(false);

  // const [isSummaryVisible, setIsSummaryVisible] = useState(false);

  const [deliveryPlace, setDeliveryPlace] = useState("inside");
  const [deliveryCharge, setDeliveryCharge] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isOrderSuccessful, setIsOrderSuccessful] = useState(false);

  const calculateDeliveryCharge = useCallback(() => {
    if (!cartItems || cartItems.length === 0) {
      setDeliveryCharge(0);
      return;
    }

    let totalWeight = cartItems.reduce((total, item) => total + item.weight * item.quantity, 0);
    let charge = 0;

    if (deliveryPlace === "inside") {
      if (totalWeight <= 0.5) charge = 60;
      else if (totalWeight <= 1) charge = 70;
      else if (totalWeight <= 2) charge = 90;
      else charge = 90 + Math.ceil(totalWeight - 2) * 15;
    } else {
      if (totalWeight <= 0.5) charge = 120;
      else if (totalWeight <= 1) charge = 145;
      else if (totalWeight <= 2) charge = 180;
      else charge = 180 + Math.ceil(totalWeight - 2) * 20;
    }

    setDeliveryCharge(charge);
  }, [cartItems, deliveryPlace]);

  useEffect(() => {
    calculateDeliveryCharge();
  }, [calculateDeliveryCharge]);

  const totalAmount = cartItems.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);  

  const totalAmountWithDelivery = totalAmount + deliveryCharge;
  const totalWeight = cartItems.reduce((total, item) => total + item.weight * item.quantity, 0);

  const handlePlaceOrder = () => {
    setModalOpen(true);
    // setIsSummaryVisible(true);
  };

  const handleCloseModal = () => {
    if (isOrderSuccessful) {
      clearCart();
    }
    setModalOpen(false);
    // setIsSummaryVisible(false);
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
        console.log("Cart Items:", cartItems);
        const response = await fetch("https://order.kinboekhaney.com/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            cartItems,
            totalAmount,
            deliveryCharge,
            totalAmountWithDelivery,
            customerDetails: formData,
            orderTime: timestamp,
          }),
        });

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

    const formatTimestamp = (timestamp) => {
      const date = new Date(timestamp);
  
      const hours = date.getHours() % 12 || 12;
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const seconds = String(date.getSeconds()).padStart(2, '0');
      const ampm = date.getHours() >= 12 ? 'PM' : 'AM';
  
      const day = String(date.getDate()).padStart(2, '0');
      const monthShort = date.toLocaleString('en-US', { month: 'short' });
      const year = date.getFullYear();
  
      return `${hours}:${minutes}:${seconds} ${ampm}, ${day}-${monthShort}-${year}`;
  };
  
  const formattedOrderTimestamp = formatTimestamp(orderTimestamp);
  
  
    const docDefinition = {
        content: [
            {
                columns: [
                    { image: logoBase64, width: 100 }, 
                    { text: 'Order Invoice', style: 'topRightTitle', alignment: 'right' },
                ],
                margin: [0, 0, 0, 10],
            },
  
            {
                text: 'Customer Details',
                style: 'sectionHeader',
                margin: [0, 20, 0, 8],
            },
            {
                table: {
                    widths: ['35%', '65%'],
                    body: [
                        [{ text: 'Name', style: 'tableHeader' }, { text: formData.name, style: 'tableContent' }],
                        [{ text: 'Phone', style: 'tableHeader' }, { text: formData.phone, style: 'tableContent' }],
                        [{ text: 'Email', style: 'tableHeader' }, { text: formData.email, style: 'tableContent' }],
                        [{ text: 'Order Date', style: 'tableHeader' }, { text: formattedOrderTimestamp, style: 'tableContent' }],
                        [{ text: 'Delivery Address', style: 'tableHeader' }, { text: formData.address, style: 'tableContent' }],
                    ],
                },
                layout: {
                    fillColor: (rowIndex, node, columnIndex) => {
                        return columnIndex === 0 ? '#f4f4f4' : null;
                    },
                    hLineColor: () => '#000000', 
                    vLineColor: () => '#000000', 
                    lineWidth: 0.5, 
                },
            },
  
            {
                text: 'Order Summary',
                style: 'sectionHeader',
                margin: [0, 20, 0, 8],
            },
            {
                table: {
                    widths: ['50%', '25%', '25%'],
                    body: [
                        [
                            { text: 'Product', style: 'tableHeader' },
                            { text: 'Quantity', style: 'tableHeader', alignment: 'center' },
                            { text: 'Price', style: 'tableHeader', alignment: 'right' },
                        ],
                        ...cartItems.map(item => [
                            { text: item.name, style: 'tableContent' },
                            { text: item.quantity, style: 'tableContent', alignment: 'center' },
                            { text: `BDT ${(item.price * item.quantity)}`, style: 'tableContent', alignment: 'right' },
                        ]),
                        [
                            { text: 'Subtotal', colSpan: 2, style: 'tableFooter' },
                            {},
                            { text: `BDT ${totalAmount}`, style: 'tableFooter', alignment: 'right' },
                        ],
                        [
                            { text: 'Delivery Charge', colSpan: 2, style: 'tableFooter' },
                            {},
                            { text: `BDT ${deliveryCharge}`, style: 'tableFooter', alignment: 'right' },
                        ],
                        [
                            { text: 'Total Amount', colSpan: 2, style: 'tableFooter' },
                            {},
                            { text: `BDT ${totalAmountWithDelivery}`, style: 'tableFooter', alignment: 'right' },
                        ],
                    ],
                },
                layout: {
                    fillColor: (rowIndex) => (rowIndex === 0 ? '#f4f4f4' : null), 
                    hLineColor: () => '#000000', 
                    vLineColor: () => '#000000', 
                    lineWidth: 0.5, 
                },
            },
        ],
  
        footer: {
          stack: [
              {
                  canvas: [
                      {
                          type: 'line',
                          x1: 0,
                          y1: 0,
                          x2: 515,
                          y2: 0,
                          lineWidth: 0.5,
                          lineColor: '#6C757D',
                      },
                  ],
              },
              {
                  text: [
                      { text: 'If you have not authorized the transaction then please reply to this email with the reason.\n', style: 'footerNote' },
                      { text: 'You can send us an E-mail at ', style: 'footerNote' },
                      { text: 'contact@kinboekhaney.com', link: 'mailto:contact@kinboekhaney.com', style: 'footerNote',  color: '#0000FF' },
                      { text: ' or WhatsApp at ', style: 'footerNote' },
                      { text: 'https://wa.me/message/H3HCLKGHJ6WMA1', link: 'https://wa.me/message/H3HCLKGHJ6WMA1', style: 'footerNote',  color: '#0000FF' },
                      { text: ' or Call at ', style: 'footerNote' },
                      { text: '+8801409327811', link: 'tel:+8801409327811', style: 'footerNote', color: '#0000FF' },
                  ],
                  margin: [0, 10, 0, 0],
              },
          ],
          margin: [40, 0, 40, 20],
      },           
  
        styles: {
            topRightTitle: {
                fontSize: 18,
                bold: true,
                color: '#000000', 
            },
            date: {
                fontSize: 12,
                alignment: 'right',
                color: '#000000', 
            },
            sectionHeader: {
                fontSize: 16,
                bold: true,
                color: '#000000', 
            },
            tableHeader: {
                bold: true,
                fontSize: 12,
                color: '#000000', 
            },
            tableContent: {
                fontSize: 12,
                color: '#000000', 
            },
            tableFooter: {
                bold: true,
                fontSize: 12,
                color: '#000000', 
            },
            footerNote: {
                fontSize: 10,
                italics: true,
                color: '#6C757D', 
                alignment: 'center',
            },
        },
  
        pageMargins: [40, 60, 40, 80], 
    };
  
    pdfMake.createPdf(docDefinition).download(`Invoice ${formattedOrderTimestamp.replace(/[/,:]/g, '-')}.pdf`);
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
            <p>Weight: {item.weight} kg</p>
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
        <button onClick={handlePlaceOrder} className="place-order-button">Checkout</button>
      </div>

      {/* Modal */}
      {isModalOpen  && (
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
                    <th>Weight (kg)</th>
                    <th>Total (BDT)</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td>{item.quantity}</td>
                      <td>{(item.weight * item.quantity).toFixed(2)}</td>
                      <td>{item.price * item.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <h5>Total Weight: {totalWeight.toFixed(2)} kg</h5>
              <h5>Total Delivery Charge: BDT {deliveryCharge}</h5>
              <h5>Total Amount: BDT {totalAmount}</h5>
              <h5>Total Amount with Delivery Charge: BDT {totalAmountWithDelivery}</h5>
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

              <div className="delivery-options">
              <label>
                <input
                  type="radio"
                  name="deliveryPlace"
                  value="inside"
                  checked={deliveryPlace === "inside"}
                  onChange={(e) => setDeliveryPlace(e.target.value)}
                />
                Inside Chattogram
              </label>
              <label>
                <input
                  type="radio"
                  name="deliveryPlace"
                  value="outside"
                  checked={deliveryPlace === "outside"}
                  onChange={(e) => setDeliveryPlace(e.target.value)}
                />
                Outside Chattogram
              </label>
            </div>

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
        <DeliveryPlan/>
    </div>
  );
};

export default Cart;
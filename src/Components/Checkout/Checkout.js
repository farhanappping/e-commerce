import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    paymentMethod: 'creditCard',
  });

  const [submitted, setSubmitted] = useState(false);

  // const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to server)
    console.log('Form data:', formData);
    setSubmitted(true);
    // Optionally navigate to a different page after a delay
    // setTimeout(() => {
    //   navigate('/confirmation');
    // }, 2000);
  };

  return (
    <div className="container">
      <div className="checkout-container">
        <h2 className="text-center">Checkout</h2>
        {submitted ? (
          <div className="success-message text-center">
            Form submitted successfully!
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label>Address</label>
                  <input type="text" name="address" value={formData.address} onChange={handleChange} required />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <label>City</label>
                  <input type="text" name="city" value={formData.city} onChange={handleChange} required />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label>Postal Code</label>
                  <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} required />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <label>Country</label>
                  <input type="text" name="country" value={formData.country} onChange={handleChange} required />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label>Payment Method</label>
                  <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange}>
                    <option value="creditCard">Credit Card</option>
                    <option value="paypal">PayPal</option>
                    <option value="upi">UPI</option>
                  </select>
                </div>
              </div>
            </div>
            <button type="submit" className="placeOrder text-center m-auto">Place Order</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Checkout;

import React, { useState } from 'react';
import { connect } from 'react-redux';

import { ozowPay, peachPay } from '../actions/payments';

const MakePayment = ({ ozowPay, peachPay }) => {
  const [amount, setAmount] = useState(0);

  const payOzow = (e) => {
    e.preventDefault();
    console.log(amount);
    ozowPay(amount);
  };
  const payPeach = (e) => {
    e.preventDefault();
    console.log(amount);
    peachPay(amount);
  };
  return (
    <div>
      <div className="container" align="center">
        <h2>Payment Integration!</h2>

        <form className="row g-3" style={{ width: '25rem' }}>
          <div className="mb-3">
            <label htmlFor="amount" className="form-label">
              Enter amount:
            </label>
            <input
              type="number"
              className="form-control"
              id="amount"
              placeholder="amount"
              min="0"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <button onClick={payOzow}>Pay with ozow</button>
          <button onClick={payPeach}>Pay with peach</button>
        </form>
      </div>
    </div>
  );
};

export default connect(null, { ozowPay, peachPay })(MakePayment);

import axios from 'axios';

export const ozowPay = (amount) => async (dispatch) => {
  try {
    console.log('We Here');
    const res = await axios.post('/api/payments/ozowPay', amount);
    console.log(res.data);
  } catch (error) {
    console.error(error.message);
  }
};

export const peachPay = (amount) => async (dispatch) => {
  console.log('We Here');
  try {
    const res = await axios.post('/api/payments/peachPay', amount);
    console.log(res.data);
  } catch (error) {
    console.error(error.message);
  }
};

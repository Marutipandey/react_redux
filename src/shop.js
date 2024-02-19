import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withdrawMoney, depositMoney } from './state/action-creators/index';

const Shop = () => {
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.amount);

  return (
    <div>
      <h2>Deposit/Withdraw Money</h2>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => dispatch(withdrawMoney(100))}
      >
        -
      </button>
      Update Balance({balance})
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => dispatch(depositMoney(100))}
      >
        +
      </button>
    </div>
  );
};

export default Shop;
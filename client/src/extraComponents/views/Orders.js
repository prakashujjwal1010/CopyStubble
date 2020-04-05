import React from "react";
import PropTypes from "prop-types";

const sample = [{
    name: "trump",
    item: "rice stubble",
    price: 55,
    qty: 100
  },
  {
    name: "trump",
    item: "rice stubble",
    price: 55,
    qty: 100
  },
  {
    name: "trump",
    item: "rice stubble",
    price: 55,
    qty: 100
  },
  {
    name: "trump",
    item: "rice stubble",
    price: 55,
    qty: 100
  },

];
const Orders = props => {
    return(
          <div className="card-panel teal">
          <h5> Orders History </h5>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Item Name</th>
                  <th>Item Price</th>
                  <th>Quantity</th>
                </tr>
              </thead>

            <tbody>
            {sample.map(order =>
                <tr>
                  <td>{order.name}</td>
                  <td>{order.item}</td>
                  <td>{order.price}</td>
                  <td>{order.qty}</td>
                </tr>
              )}
          </tbody>
        </table>
      </div>
    );
};

Orders.propTypes = {

};

export default Orders;

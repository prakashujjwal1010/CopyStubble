import React, { useState } from "react";
import PropTypes from "prop-types";

const sample = [{
    id:1,
    location:"punjab",
    area:"200 sq.yards"
  },
  {
    id:2,
    location:"punjab",
    area:"200 sq.yards"
  },
  {
    id:3,
    location:"punjab",
    area:"200 sq.yards"
  },
  {
    id:4,
    location:"punjab",
    area:"200 sq.yards"
  },

];
const ManageFarms = props => {
    const handleSubmit = async e => {
      e.preventDefault();

    };

    return(
        <div className="container">
        <div className="card-panel teal row">
          <h5> Add a farm </h5>
          <form className='col s12' onSubmit={e => handleSubmit(e)}>
              <div className='row'>
                  <div className='col s12'></div>
              </div>

              <div className='row'>
                  <div className='input-field col s12'>
                      <input
                          className='validate'
                          type='text'
                          name='farm address'
                          id='farmAddress'
                          value=""
                          onChange=""
                      />
                      <label htmlFor='password'>
                          Enter your Farm Address
                      </label>
                  </div>
              </div>

              <br />
              <center>
                  <div className='row'>
                      <button
                          type='submit'
                          name='btn_login'
                          className='col s12 btn btn-large waves-effect indigo'
                      >
                          Add
                      </button>
                  </div>
              </center>
          </form>
        </div>
        <div className="card-panel teal row">
          <h5> Your Farms </h5>
            <table>
              <thead>
                <tr>
                  <th> Farm ID</th>
                  <th>Farm location </th>
                  <th>Farm Area</th>
                </tr>
              </thead>

            <tbody>
            {sample.map((farm,index) =>
                <tr key={index}>
                  <td>{farm.id}</td>
                  <td>{farm.location}</td>
                  <td>{farm.area}</td>
                </tr>
              )}
          </tbody>
        </table>
      </div>
      </div>
    );
};

ManageFarms.propTypes = {

};

export default ManageFarms;

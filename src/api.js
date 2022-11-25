import React, { useState } from 'react';
import { managecar } from './action/myaction';
import { useDispatch } from 'react-redux';

const Api = () => {
  const [carlist, updateCar] = useState([]);

  const getcar = () => {
    fetch('https://www.firstenquiry.com/api/car.php')
      .then((response) => response.json())
      .then((carArray) => {
        updateCar(carArray);
      });
  };

  const dispatch = useDispatch();
  return (
    <div className='container mt-4'>
      <div className='row'>
        <div className='col-lg-12 text-center'>
          <h3> Api Data Management</h3>
          <button className='btn btn-primary m-3' onClick={getcar}>
            {' '}
            Get Car{' '}
          </button>
          <button
            className='btn btn-success m-3'
            onClick={() => dispatch(managecar(carlist))}
          >
            {' '}
            Send List To Redux{' '}
          </button>
          <p> Total Api Records : {carlist.length}</p>

          <table className='table table-roundered'>
            <thead>
              <tr className='bg-light'>
                <th> Index </th>
                <th> Car Model </th>
                <th> Price</th>
                <th> Fuel Type </th>
                <th> Mileage</th>
              </tr>
            </thead>
            <tbody>
              {carlist.map((car, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1} </td>
                    <td>{car.model} </td>
                    <td>{car.price} </td>
                    <td> {car.fuelType}</td>
                    <td> {car.mileage}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Api;

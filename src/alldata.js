import React from 'react';
import { useSelector } from 'react-redux';

const Alldata = () => {
  const alluser = useSelector((state) => state.UserList);
  const allbook = useSelector((state) => state.BookList);
  const carlist = useSelector((state) => state.ApiList);
  return (
    <div className='container mt-4'>
      <div className='row'>
        <div className='col-lg-12 text-center'>
          <h3> All Redux Store Data </h3>
          <p> Total Users : {alluser.length} </p>
          <table className='table table-roundered'>
            <thead>
              <tr className='bg-light'>
                <th> User Index </th>
                <th> Full Name </th>
                <th> Age Price</th>
                <th> Education </th>
              </tr>
            </thead>
            <tbody>
              {alluser.map((info, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1} </td>
                    <td>{info.name} </td>
                    <td>{info.age} </td>
                    <td> {info.edu}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <p> Total Books : {allbook.length}</p>
          <table className='table table-roundered '>
            <thead>
              <tr className='bg-light'>
                <th> Book Index </th>
                <th> Book Name </th>
              </tr>
            </thead>

            <tbody>
              {allbook.map((name, index) => {
                return (
                  <tr key={index}>
                    <td> {index} </td>
                    <td> {name}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <p> Total Api Records : {carlist.length}</p>

          <table className='table table-bordered'>
            <thead>
              <tr className='bg-light text-primary'>
                <th> Index </th>
                <th> Car Model </th>
                <th> Price </th>
                <th> Fuel Type </th>
                <th> Mileage </th>
              </tr>
            </thead>
            <tbody>
              {carlist.map((car, index) => {
                return (
                  <tr key={index}>
                    <td> {index + 1} </td>
                    <td> {car.model} </td>
                    <td> {car.price} </td>
                    <td> {car.fuelType} </td>
                    <td> {car.mileage} </td>
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

export default Alldata;

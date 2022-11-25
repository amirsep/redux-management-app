import React from 'react';
import { saveuser, deluser } from './action/myaction';
import { useSelector, useDispatch } from 'react-redux';

const User = () => {
  const alluser = useSelector((state) => state.UserList);
  const dispatch = useDispatch();
  return (
    <div className='container mt-4'>
      <div className='row'>
        <div className='col-lg-12 text-center'>
          <h3> User Management</h3>
          <p>
            <input type='text' id='name' className='m-2' placeholder='Name' />
            <input type='text' id='age' className='m-2' placeholder='Age' />
            <input
              type='text'
              id='edu'
              className='m-2'
              placeholder='Education'
            />
            <button
              className='btn btn-primary m-3'
              onClick={() => dispatch(saveuser())}
            >
              {' '}
              Save User{' '}
            </button>
          </p>
          <p> Total Users : {alluser.length} </p>
          <table className='table table-roundered'>
            <thead>
              <tr className='bg-light'>
                <th> User Index </th>
                <th> Full Name </th>
                <th> Age Price</th>
                <th> Education </th>
                <th> Action</th>
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
                    <td>
                      <button
                        className='btn btn-danger btn-sm'
                        onClick={() => dispatch(deluser(index))}
                      >
                        Delete
                      </button>
                    </td>
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

export default User;

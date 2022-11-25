import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { savebook, delbook } from './action/myaction';

const Book = () => {
  const allbook = useSelector((state) => state.BookList);
  const dispatch = useDispatch();

  return (
    <div className='container mt-4'>
      <div className='row'>
        <div className='col-lg-12 text-center'>
          <h3> Book Management</h3>
          <p>
            Enter Book Name : <input type='text' id='newbook' />
            <button
              onClick={() => dispatch(savebook())}
              className='btn btn-primary m-3'
            >
              Save Book
            </button>
          </p>
          <p> Total Books : {allbook.length}</p>
          <table className='table table-roundered text-primary'>
            <thead>
              <tr className='bg-light'>
                <th> Book Index </th>
                <th> Book Name </th>
                <th> Action </th>
              </tr>
            </thead>

            <tbody>
              {allbook.map((name, index) => {
                return (
                  <tr key={index}>
                    <td> {index} </td>
                    <td> {name}</td>
                    <td>
                      <button
                        onClick={() => dispatch(delbook(index))}
                        className='btn btn-danger btn-sm'
                      >
                        {' '}
                        Delete{' '}
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

export default Book;

export const savebook = () => {
  var bookinfo = {
    type: 'newbook',
    bookname: document.getElementById('newbook').value,
  };
  document.getElementById('newbook').value = ''; // to clear the text field
  return bookinfo;
};

export const delbook = (index) => {
  var bookinfo = {
    type: 'deletebook',
    index: index,
  };
  return bookinfo;
};

// user related

export const saveuser = () => {
  var info = {
    type: 'adduser',
    userinfo: {
      name: document.getElementById('name').value,
      age: document.getElementById('age').value,
      edu: document.getElementById('edu').value,
    },
  };
  return info;
};

export const deluser = (index) => {
  var info = {
    type: 'deleteuser',
    index: 'index',
  };
  return info;
};

export const managecar = (carlist) => {
  var info = {
    type: 'addcar',
    carlist: carlist,
  };
  return info;
};

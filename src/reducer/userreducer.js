const UserList = (state = [], action) => {
  var datalist = Object.assign([], state);

  if (action.type == 'adduser') {
    datalist.push(action.userinfo);
  }
  if (action.type == 'deleteuser') {
    datalist.splice(action.index, 1);
  }
  return datalist;
};

export default UserList;

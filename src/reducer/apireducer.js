const ApiList = (state = [], action) => {
  var datalist = Object.assign([], state);

  if (action.type == 'addcar') {
    datalist = action.carlist;
  }

  return datalist;
};

export default ApiList;

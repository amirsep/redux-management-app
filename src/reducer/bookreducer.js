const BookList = (state = [], action) => {
  var datalist = Object.assign([], state);

  if (action.type == 'newbook') {
    datalist.push(action.bookname);
  }

  if (action.type == 'deletebook') {
    datalist.splice(action.index, 1);
  }

  return datalist;
};

export default BookList;

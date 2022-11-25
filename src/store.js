import { createStore } from 'redux';

import MainReducer from './reducer/mainreducer';

const MyStore = createStore(MainReducer);

export default MyStore;

/*
bookreducer.js + userreducer.js + apireducer.js => MainReducer => Store
*/

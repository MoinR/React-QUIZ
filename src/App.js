import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import { Provider } from 'react-redux';
import store from './redux/store';
import Footer from './components/footer';
const App = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <Footer />
    </Provider>
  )
}
export default App;


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './Header'
import { NavExample } from './Components/NavExample'
import { Footer } from './Footer';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <Header/>
        {/* <NavExample/> */}
        <div className='appbody'>
        <Outlet />
        <Footer />
        </div>
      </header>
    </div>
    </Provider>
  );
}

export default App;

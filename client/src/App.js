import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import MakePayment from './components/MakePayment';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MakePayment />
      </div>
    </Provider>
  );
}

export default App;

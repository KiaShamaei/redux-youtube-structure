
import './App.css';
import CakeContainer from './components/CakeContainer';
import {Provider} from "react-redux";
import store from './components/redux/store';

function App() {
  return (
    <div className="App">
		<Provider store={store}>
		<CakeContainer  />
		</Provider>

    </div>
  );
}

export default App;

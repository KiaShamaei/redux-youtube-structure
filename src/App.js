
import './App.css';
import CakeContainer from './components/CakeContainer';
import {Provider} from "react-redux";
import store from './components/redux/store';
import HookCakeContainer from './components/HookCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import CokaContainer from './components/CokaContainer';


function App() {
  return (
    <div className="App">
		<Provider store={store}>
		<CakeContainer  />
		<HookCakeContainer />
		<CokaContainer />
		<IceCreamContainer/>
		</Provider>

    </div>
  );
}

export default App;

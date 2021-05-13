
import './App.css';
import CakeContainer from './components/CakeContainer';
import {Provider} from "react-redux";
import store from './components/redux/store';
import HookCakeContainer from './components/HookCakeContainer';

function App() {
  return (
    <div className="App">
		<Provider store={store}>
		<CakeContainer  />
		<HookCakeContainer />
		</Provider>

    </div>
  );
}

export default App;

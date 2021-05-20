
import './App.css';
import CakeContainer from './components/CakeContainer';
import {Provider} from "react-redux";
import store from './components/redux/store';
import HookCakeContainer from './components/HookCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import CokaContainer from './components/CokaContainer';
import NewCakeContainer from './components/NewCakeContainer';

import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';


function App() {
  return (
    <div className="App">
		<Provider store={store}>
		{/* <ItemContainer />
		<ItemContainer cake />
		<CakeContainer  />
		<HookCakeContainer />
		<CokaContainer />
		<NewCakeContainer />
		<IceCreamContainer/> */}
		<UserContainer />
		</Provider>

    </div>
  );
}

export default App;

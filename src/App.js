import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Footer from './components/Footer';

function App() {
  	return (
		<div className="App">
			<BrowserRouter>
				<Header/>
				<Switch>
					<Route path="/" exact>
						<Home/>
					</Route>
				</Switch>
				<Footer/>
			</BrowserRouter>
		</div>
	);
}

export default App;

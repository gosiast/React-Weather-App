import "./App.css";
import WeatherSearch from "./WeatherSearch";

function App() {
	return (
		<div className="App">
			<div className= "weather-container">
				<header className="App-header">
					<h1> My Weather App - React</h1>
				<WeatherSearch />
			</header>
			<footer>
				{" "}
				<a href="https://github.com/gosiast/react-weather-app">
					Open source
				</a>{" "}
				by <a href="https://github.com/gosiast">Malgorzata Stano</a>
			</footer>
			</div>
		</div>
	);
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Background } from './components/background/background';
import { Save } from './pages/save';
import { MainLayoutRouter } from './MainLayoutRouter';

import './App.css';

function App() {
	return (
		<Router>
			<div className="App">
				<Background />
				<Routes>
					<Route path="*" element={<MainLayoutRouter />} />
					<Route path="/save" element={<Save />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;

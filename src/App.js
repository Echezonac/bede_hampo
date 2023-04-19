import "./App.css"
import HomePage from "./pages/HomePage/HomePage"
import Layout from "./Layout/Layout"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
	return (
		<Routes>
			<Route path="" element={<Layout />}>
				<Route path="/" element={<HomePage />} />
			</Route>
			
		</Routes>
	)
}

export default App

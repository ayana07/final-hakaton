import { BrowserRouter } from "react-router-dom";
import "./App.css";
// import NavBar from "./components/NavBar/NavBar";
import MainRoutes from "./MainRoutes";
import AuthContextsProvaider from "./contexts/AuthContexts";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<>
			<BrowserRouter>
				<AuthContextsProvaider>
					{/* <NavBar /> */}
					<MainRoutes />
					<Footer />
				</AuthContextsProvaider>
			</BrowserRouter>
		</>
	);
}

export default App;

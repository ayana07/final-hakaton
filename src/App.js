import { BrowserRouter } from "react-router-dom";
import "./App.css";
// import NavBar from "./components/NavBar/NavBar";
import MainRoutes from "./MainRoutes";
import AuthContextsProvaider from "./contexts/AuthContexts";
import Footer from "./components/Footer/Footer";
import RentCarContextProvaider from "./contexts/RentContext";

function App() {
	return (
		<>
			<BrowserRouter>
				<AuthContextsProvaider>
					<RentCarContextProvaider>
						{/* <NavBar /> */}
						<MainRoutes />
						<Footer />
					</RentCarContextProvaider>
				</AuthContextsProvaider>
			</BrowserRouter>
		</>
	);
}

export default App;

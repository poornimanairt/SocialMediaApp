import MainLayout from "./components/layout/MainLayout";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
    return (
        <>
            <Router>
                <MainLayout />
            </Router>
        </>
    );
}

export default App;

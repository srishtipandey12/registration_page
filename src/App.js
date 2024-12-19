import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";

function App() {
    return (
        <Router>
            <Routes>
            <Route path="/" element={<h1>Welcome to the Home Page</h1>} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                
            </Routes>
        </Router>
    );
}



export default App;

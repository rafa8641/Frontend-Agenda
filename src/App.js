import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Contatos from "./pages/Contatos";

function App() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Login />} />
                <Route path="/contatos" element={<Contatos />} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;
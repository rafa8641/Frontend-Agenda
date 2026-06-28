import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Contatos from "./pages/Contatos";
import Cadastro from "./pages/Cadastro";

function App() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/contatos" element={<Contatos />} />
               

            </Routes>
        </BrowserRouter>
    );
}

export default App;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import api from "../services/api";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../styles/login.css";

export default function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post("/usuarios/login", {
                email,
                senha
            });
            
            localStorage.setItem("usuario", JSON.stringify(response.data));
            console.log("Login ok:", response.data);
            navigate("/contatos");
        } catch (error) {
            alert("Login inválido");
        }
    }

    return (
        <div className="login-page">

            <div className="login-container">
                <div className="login-header">

                    <div className="login-icon">
                        <i className="bi bi-person-vcard"></i>
                    </div>
                    <h1>Agenda de Contatos</h1>
                    <p>Faça login para continuar</p>

                </div>

                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3">
                        <Form.Label>E-MAIL</Form.Label>
                        <div className="input-container">
                            <i className="bi bi-envelope input-icon"></i>

                            <Form.Control
                                type="email"
                                placeholder="Digite seu email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="login-input"
                            />
                        </div>
                    </Form.Group>

                    <Form.Group className="mb-4">
                        <Form.Label>SENHA</Form.Label>
                        <div className="input-container">
                            <i className="bi bi-hash input-icon"></i>

                            <Form.Control
                                type="password"
                                placeholder="Digite sua senha"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                className="login-input"
                            />
                        </div>
                    </Form.Group>  
                         
                    <Button variant="primary" type="submit" className="w-100">
                        <i className="bi bi-box-arrow-in-right"></i> Entrar
                    </Button>

                    <div className="text-center mt-4">

                        <span className="text-secondary">
                            Ainda não possui conta?
                        </span>

                        <br/>

                        <Link
                            to="/cadastro"
                            className="text-decoration-none"
                        >
                            Criar Conta
                        </Link>

                    </div>
                </Form>

            </div>

        </div>
        

    );
}


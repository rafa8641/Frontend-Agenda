import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import api from "../services/api";
import "../styles/login.css";

export default function Cadastro() {

    const navigate = useNavigate();

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    async function cadastrar(e) {

        e.preventDefault();

        try {

            await api.post("/usuarios", {
                nome,
                email,
                senha
            });

            alert("Usuário cadastrado com sucesso!");

            navigate("/");

        } catch {

            alert("Erro ao cadastrar usuário");

        }

    }

    return (

        <div className="login-page">

            <div className="login-container">

                <div className="login-header">

                    <div className="login-icon">
                        <i className="bi bi-person-plus-fill"></i>
                    </div>

                    <h1>Criar Conta</h1>

                    <p>Cadastre-se para utilizar a Agenda</p>

                </div>

                <Form onSubmit={cadastrar}>

                    {/* Nome */}

                    <div className="input-group-custom mb-3">

                        <span className="input-icon">
                            <i className="bi bi-person-fill"></i>
                        </span>

                        <Form.Control
                            type="text"
                            placeholder="Nome completo"
                            value={nome}
                            onChange={(e)=>setNome(e.target.value)}
                        />

                    </div>

                    {/* Email */}

                    <div className="input-group-custom mb-3">

                        <span className="input-icon">
                            <i className="bi bi-envelope-fill"></i>
                        </span>

                        <Form.Control
                            type="email"
                            placeholder="Digite seu email"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                        />

                    </div>

                    {/* Senha */}

                    <div className="input-group-custom mb-4">

                        <span className="input-icon">
                            <i className="bi bi-lock-fill"></i>
                        </span>

                        <Form.Control
                            type="password"
                            placeholder="Digite sua senha"
                            value={senha}
                            onChange={(e)=>setSenha(e.target.value)}
                        />

                    </div>

                    <Button
                        type="submit"
                        className="w-100 btn-primary"
                    >
                        <i className="bi bi-person-plus me-2"></i>

                        Criar Conta

                    </Button>

                </Form>

                <div className="text-center mt-4">

                    <span className="text-secondary">
                        Já possui uma conta?
                    </span>

                    <br/>

                    <Link
                        to="/"
                        className="text-decoration-none"
                    >
                        Entrar
                    </Link>

                </div>

            </div>

        </div>

    );

}
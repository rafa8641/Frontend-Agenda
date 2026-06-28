import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import NavBar from "../components/Navbar";
import SearchBar from "../components/BarradePesquisa";
import ContactCard from "../components/ContatoCard";
import Button from "react-bootstrap/Button";
import ContatoContador from "../components/ContatoContador";
import ContatoFormulario from "../components/ContatoFormulario";
import "../styles/contatos.css";

export default function Contatos() {

    const [busca, setBusca] = useState("");
    const [mostrarModal, setMostrarModal] = useState(false);
    const [contatoEditando, setContatoEditando] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const usuario = localStorage.getItem("usuario");
        if (!usuario) {
            navigate("/");
        }
    }, [navigate]);


    const [contatos, setContatos] = useState([]);

    async function carregarContatos() {

        const usuario = JSON.parse(localStorage.getItem("usuario"));

        const response = await api.get(`/contatos/usuario/${usuario.id}/ativos`);

        setContatos(response.data);
    }

    useEffect(() => {

        carregarContatos();

    }, []);

    const filtrados = contatos.filter((c) => {
        const texto = busca.toLowerCase();

        return (
            c.nome.toLowerCase().includes(texto) ||
            c.email.toLowerCase().includes(texto) ||
            c.telefone.includes(texto)
        );
    });

    function editarContato(contato) {
        setContatoEditando(contato);
        setMostrarModal(true);
    }

    async function excluirContato(id) {

        const confirmar = window.confirm("Deseja desativar este contato?");

        if (!confirmar) return;

        try {

            await api.patch(`/contatos/${id}/desativar`);

            carregarContatos();

        } catch (error) {

            console.error(error);
            alert("Erro ao desativar contato");

        }
    }

    return (
        <div>

            <NavBar />

            <div className="container-principal">
                
            <div className="topo-contatos">

                <ContatoContador quantidade={filtrados.length}/>
                <Button
                    className="btn-custom"
                    onClick={()=>{
                        setContatoEditando(null);
                        setMostrarModal(true);
                    }}
                >
                    <i className="bi bi-plus-circle me-2"></i> Novo contato
                </Button>
            </div>

                <ContatoFormulario
                    show={mostrarModal}
                    onHide={() => setMostrarModal(false)}
                    carregarContatos={carregarContatos}
                    contatoEditando={contatoEditando}
                />

                <SearchBar value={busca} onChange={setBusca} />

                {filtrados.map((contato) => (
                    <ContactCard key={contato.id} contato={contato} onEditar={editarContato} onExcluir={excluirContato} />
                ))}

            </div>

        </div>
    );
}
import { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import api from "../services/api";
import "../styles/contatoformulario.css"

export default function ContatoFormulario({
    show,
    onHide,
    carregarContatos,
    contatoEditando
}) {

    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");
    const [idade, setIdade] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");

    useEffect(() => {

        if (contatoEditando) {

            setNome(contatoEditando.nome);
            setTelefone(contatoEditando.telefone);
            setEmail(contatoEditando.email);
            setIdade(contatoEditando.idade);
            setDataNascimento(contatoEditando.dataNascimento);

        } else {

            setNome("");
            setTelefone("");
            setEmail("");
            setIdade("");
            setDataNascimento("");

        }

    }, [contatoEditando]);

    async function salvar() {

        const usuario = JSON.parse(localStorage.getItem("usuario"));

        const dados = {
            nome,
            telefone,
            email,
            idade,
            dataNascimento,
            usuarioId: usuario.id
        };

        try {

            if (contatoEditando) {

                await api.put(`/contatos/${contatoEditando.id}`, dados);

            } else {

                await api.post("/contatos", dados);

            }

            await carregarContatos();
            onHide();

        } catch (error){
            console.log(error);
            console.log(error.response);
            console.log(error.response?.data);
            alert("Erro ao salvar contato");
        }

    }

    return (

        <Modal show={show} onHide={onHide}>

            <Modal.Header closeButton>

                <Modal.Title>

                    {contatoEditando ? "Editar contato" : "Novo contato"}

                </Modal.Title>

            </Modal.Header>

            <Modal.Body>

                <Form>

                    <Form.Group className="mb-3">
                        <Form.Label className="modal-label">
                            NOME COMPLETO
                        </Form.Label>

                        <Form.Control
                            className="modal-input"
                            placeholder="Nome"
                            value={nome}
                            onChange={(e)=>setNome(e.target.value)}
                        />
                    </Form.Group>

                    <div className="row">

                        <div className="col-md-6">

                            <Form.Group className="mb-3">
                                <Form.Label className="modal-label">
                                    TELEFONE
                                </Form.Label>

                                <Form.Control
                                    className="modal-input"
                                    placeholder="Telefone"
                                    value={telefone}
                                    onChange={(e)=>setTelefone(e.target.value)}
                                />
                            </Form.Group>

                        </div>

                        <div className="col-md-6">

                            <Form.Group className="mb-3">
                                <Form.Label className="modal-label">
                                    IDADE
                                </Form.Label>

                                <Form.Control
                                    className="modal-input"
                                    type="number"
                                    placeholder="Idade"
                                    value={idade}
                                    onChange={(e)=>setIdade(e.target.value)}
                                />
                            </Form.Group>

                        </div>

                    </div>

                    <Form.Group className="mb-3">
                        <Form.Label className="modal-label">
                            DATA DE NASCIMENTO
                        </Form.Label>

                        <Form.Control
                            className="modal-input"
                            type="date"
                            value={dataNascimento}
                            onChange={(e)=>setDataNascimento(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-4">
                        <Form.Label className="modal-label">
                            E-MAIL
                        </Form.Label>

                        <Form.Control
                            className="modal-input"
                            placeholder="Email"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                    </Form.Group>

                </Form>

            </Modal.Body>

            <Modal.Footer>

                <div className="row w-100">

                    <div className="col-6">

                        <Button
                            className="btn-cancelar"
                            onClick={onHide}
                        >
                            Cancelar
                        </Button>

                    </div>

                    <div className="col-6">

                        <Button
                            className="btn-salvar"
                            onClick={salvar}
                        >
                            <i className="bi bi-plus-lg me-2"></i>

                            {contatoEditando ? "Salvar" : "Adicionar"}

                        </Button>

                    </div>

                </div>

            </Modal.Footer>

        </Modal>

    );

}
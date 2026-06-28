import Card from "react-bootstrap/Card";
import "../styles/card.css";

export default function ContatoCard({ contato, onEditar, onExcluir }) {

    const initials = contato.nome
        .split(" ")
        .map(n => n[0])
        .join("")
        .toUpperCase();

    function abrirWhatsapp(){
        const telefone = contato.telefone.replace(/\D/g, "");
        window.open(`https://wa.me/55${telefone}`, "_blank")
    }

    return (
        <Card className="contact-card mb-3 p-3">

            <div className="card-content">

                <div className="avatar">
                    {initials}
                </div>

                <div>
                    <h5 className="nome">{contato.nome}</h5>

                    <div className="info">
                        <div>
                            <i className="bi bi-telephone-fill"></i>
                            {contato.telefone}
                        </div>

                        <div>
                            <i className="bi bi-envelope-fill"></i>
                            {contato.email}
                        </div>

                        <div>
                            <i className="bi bi-cake2-fill"></i>
                            {contato.idade} anos
                        </div>

                        <div>
                            <i className="bi bi-calendar-event-fill"></i>
                            {contato.dataNascimento}
                        </div>
                    </div>
                    
                </div>

                <div className="acoes">
                    <button
                        className="btn-icon editar"
                        onClick={() => onEditar(contato)}
                    >
                        <i className="bi bi-pencil"></i>
                    </button>

                    <button
                        className="btn-icon excluir"
                        onClick={() => onExcluir(contato.id)}
                    >
                        <i className="bi bi-trash"></i>
                    </button>

                    <button
                        className="btn-icon whatsapp"
                        onClick={abrirWhatsapp}
                    >
                        <i className="bi bi-whatsapp"></i>
                    </button>
                </div>

            </div>

        </Card>
    );
}
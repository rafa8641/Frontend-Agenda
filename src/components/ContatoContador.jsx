import "../styles/contatos.css";

export default function ContatoContador({ quantidade }) {

    return (
        <div className="contador">
            <div className="contador-icone">
                <i className="bi bi-people"></i>
            </div>

            <div>
                <small>Total de contatos</small>
                <h2>{String(quantidade).padStart(2,"0")}</h2>
            </div>
        </div>
    );
}
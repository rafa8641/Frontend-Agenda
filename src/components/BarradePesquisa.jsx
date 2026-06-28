import Form from "react-bootstrap/Form";
import "../styles/barradepesquisa.css";

export default function SearchBar({ value, onChange }) {
    return (
        <div className="search-container mb-3">

            <i className="bi bi-search search-icon"></i>

            <Form.Control
                type="text"
                placeholder="Buscar por nome, e-mail ou telefone..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="search-input"
            />

        </div>
    );
}
import { Navbar, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../styles/navbar.css";

export default function NavBar() {
    
    const navigate = useNavigate();

    function handleLogout() {
        localStorage.removeItem("usuario");
        navigate("/");
    }
    
    return (
        <Navbar className="nav-custom">

            <Container>

                <Navbar.Brand className="logo">

                    <i className="bi bi-person-vcard-fill me-2"></i> Agenda

                </Navbar.Brand>

                <Button className="logout-btn" onClick={handleLogout}>

                    <i className="bi bi-box-arrow-right me-2"></i>

                    Sair

                </Button>

            </Container>

        </Navbar>
    );
}
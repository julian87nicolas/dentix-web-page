import "./Navbar.css"

function Navbar(){
    return (
        <>
            <nav>
                <h2>
                    <a href="#">
                        <img src="./logo.svg" alt="dentix clínica odontológica" width="150px" />
                    </a>
                </h2>
                <ul>
                    <li><a href="#">Inicio</a> <div className="sub"/></li>
                    <li><a href="#">Contacto</a><div className="sub"/></li>
                    <li><a href="#">Ubicación</a><div className="sub"/></li>
                    <li><a href="#">Sobre</a><div className="sub"/></li>
                </ul>
            </nav>
            <div className="sep"></div>
        </>
    )
}

export default Navbar;
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
                    <a href="#"><li>Inicio</li></a>
                    <a href="#"><li>Contacto</li></a>
                    <a href="#"><li>Ubicación</li></a>
                    <a href="#"><li>Sobre</li></a>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;
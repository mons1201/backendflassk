import { Container, Nav, Navbar } from "react-bootstrap"

export const Menu=()=>
{
    return(
        <>
          <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    Mohan Consultancy Services
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="mohan" />
                <Navbar.Collapse id="mohan">
                    <Nav className="ms-auto">
                        <a className="me-2 btn btn-outline-success" href="/show">View</a>
                        <a className="me-2 btn btn-outline-success" href="/new">New</a>
                        <a className="me-2 btn btn-outline-success" href="/filter">Shortlist</a>
                        <button className="me-2 btn btn-outline-danger" onClick={()=>{
                            sessionStorage.removeItem("person")
                            window.location.assign("/")
                        }}>
                            <i class="bi bi-door-open-fill"></i>
                            
                        </button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            
            
          </Navbar>
        </>
    )
}
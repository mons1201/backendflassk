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
                        <Nav.Link href="/show">View</Nav.Link>
                        <Nav.Link href="/new">New</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            
            
          </Navbar>
        </>
    )
}
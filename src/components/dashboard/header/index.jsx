"use client";
import Link from "next/link";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";

const DashboardHeader = () => {

    return (
        <Navbar className={`bg-danger mb-3`} expand={false} collapseOnSelect> {/*collapseOnSelect tıklandığında menüyü kapatır  */}
            <Container>
                <Navbar.Brand href="/dashboard">Product Manager</Navbar.Brand>
                <Navbar.Toggle aria-controls={`dashboardOffcanvas`} />
                <Navbar.Offcanvas
                    id={`dashboardOffcanvas`}
                    aria-labelledby={`dashboardOffcanvasLabel`}
                    placement="start"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`dashboardOffcanvasLabel`}>
                            Product Manager
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link as={Link} href="/dashboard" >Dashboard</Nav.Link>
                            <Nav.Link as={Link} href="/dashboard/products" >Products</Nav.Link>
                            <Nav.Link as={Link} href="/dashboard/profile" >Profile</Nav.Link>
                            <Nav.Link as={Link} href="/" >Home</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
};

export default DashboardHeader;

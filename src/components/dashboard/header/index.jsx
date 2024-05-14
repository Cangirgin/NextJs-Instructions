"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
//import "@/components/dashboard/header"
import "./style.scss"
import MenuItemData from "./menu.json"
import { FaSignOutAlt } from "react-icons/fa";
import { signOut } from "next-auth/react";

const DashboardHeader = () => {

    const handleLogout = () => {
        const resp = confirm("Are you sure to logout?")
        if (!resp) return
        signOut({ callbackUrl: "/" })


    }


    const pathname = usePathname()

    return (
        <Navbar className={`bg-danger mb-3`} expand={false} collapseOnSelect> {/*collapseOnSelect tıklandığında menüyü kapatır  */}
            <Container >
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
                            {
                                MenuItemData.map((item) => (
                                    <Nav.Link id="nav-link" as={Link} key={item.id} href={item.url} active={pathname === item.url} >{item.title}</Nav.Link>
                                ))
                            }
                            <hr />
                            <Nav.Link onClick={handleLogout} >Signout  <FaSignOutAlt /> </Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
};

export default DashboardHeader;

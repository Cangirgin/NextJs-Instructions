"use client"
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import MenuItemData from "./menu.json"
import Link from 'next/link'
const Header = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={Link} href="/">Product Manager</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {
                            MenuItemData.map((item) => (
                                <Nav.Link as={Link} key={item.id} href={item.url}>{item.title}</Nav.Link>
                            ))
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>)
}

export default Header
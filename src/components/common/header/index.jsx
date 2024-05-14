"use client"

import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import MenuItemData from "./menu.json";
import Link from 'next/link';
import Image from 'next/image';
import { useSession } from 'next-auth/react';

const Header = () => {
    const { data: session } = useSession();

    return (
        <Navbar expand="lg" bg='dark' data-bs-theme="dark" collapseOnSelect>
            <Container>
                <Navbar.Brand as={Link} href="/">
                    <Image alt='Cosmo Shop Logo' src="/image/logo.png" width={272} height={43} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {MenuItemData.map((item) => (
                            <Nav.Link as={Link} key={item.id} href={item.url}>{item.title}</Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
                <Nav>
                    {session?.user ? (
                        <Link href="/dashboard" passHref>
                            {`${(session?.user.name)?.toUpperCase()}'s  Dashboard'`}
                        </Link>
                    ) : (
                        <Link href="/login" passHref>
                            Login
                        </Link>
                    )}
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;

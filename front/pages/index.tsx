import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Container, Navbar, Nav, NavDropdown, Modal, Button, Form, Carousel, Card } from 'react-bootstrap';
import Script from 'next/script'
import React, {useState} from "react";

const Home: NextPage = () => {

const [show, setShow] = useState(false);
const [index, setIndex] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    < >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin></Script>
      </Head>

      <Navbar collapseOnSelect expand="lg"  bg="light" variant="light">
          <Container>
          <Navbar.Brand href="#home"><Image src="/logo.jpeg" alt="Informidia Logo" width={130} height={90} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
        
            </Nav>
            <Nav>
              <Button  onClick={handleShow}>
                Login
              </Button>
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>


      <main className={styles.main}>

        
        
        <p className={styles.description}>

          InforMídia - Sistema de Mídia Indoor <br/>
          Fortaleça a Estratégia de Comunicação com TV Indoor no Ponto de Venda.<br/>
          <p className={styles.small}>Para uma comunicação interna de qualidade, é importante segmentar e personalizar o conteúdo que será exibido.</p>
            
        </p>

        
      </main>


  <Navbar fixed="bottom" expand="lg" variant="light" bg="light">
    <Container>
    <Navbar.Brand href="#home">InforMídia</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        powered by <a href="#login">DBG</a>
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
  </Navbar>



<Modal show={show} onHide={handleClose} size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>

     
  <Modal.Header closeButton>
    <Modal.Title>Login</Modal.Title>
  </Modal.Header>

  <Modal.Body>
  <Container>
    <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Senha</Form.Label>
    <Form.Control type="password" placeholder="Senha" />
  </Form.Group>

</Form>
</Container>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="primary">Entrar</Button>
  </Modal.Footer>

</Modal>


    </>
  )
}

export default Home

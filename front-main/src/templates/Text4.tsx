import Link from 'next/link';

import { Background } from '../background/Background';
import { Button, Container } from 'react-bootstrap';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';



const Text4 = () => (
  <Background color="bg-gray-100">

    <Section className="h-100" >
    <Container >

      <HeroOneButton
        title={
          <>
            <span className="text-gray-200 text-4xl ">Algumas das grandes marcas que confiam no nosso trabalho</span>
            <br/>
            
          </>
        }
        description=""
        button={
          <Link href="">
            <a>
              <Button  >Baixe o app agora</Button>
            </a>
          </Link>
        }
      />
    </Container >
  </Section>
  </Background>
);

export { Text4 };

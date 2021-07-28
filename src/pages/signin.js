import React from 'react'
import { Button, Card, Container, Divider, Header, Icon, Image } from 'semantic-ui-react'
import styles from './components/logostyle.module.css'


export default function signin() {
    return <Container fluid>
        <Card fluid color='red'>
            <Card.Content>
                <Card.Header color='black'>
                    <h1><Icon name='connectdevelop' color='orange' size='large' className={styles.Applogo}></Icon>Nexus</h1>
                </Card.Header>
            </Card.Content>
            <Image src='images/avatar/unsplash.jpg'></Image>

            <Card.Content>
                <Card.Description textAlign='center'>
                    <h2>Welcome to your community portal</h2>

                    <a href='/'><Button type='submit' color='black'><Icon color='orange' name='sign in'></Icon>Continue with Single Sign-on</Button></a>

                </Card.Description>
            </Card.Content>
        </Card>
    </Container>
}
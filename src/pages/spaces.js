import React from 'react';
import { Card, Icon } from 'semantic-ui-react';


export default function Spaces() {
    return <div>
        <h1>Spaces</h1><Card.Group>
        
            <Card color='blue' as='a'  link='#' target='_blank'>
                <Card.Content>
                    <Card.Header><a href='/events/CSR' target="_blank" rel="noreferrer">CSR</a></Card.Header>
                    <Card.Meta>500 members</Card.Meta>
                    <Card.Description>CSR community events</Card.Description>
                </Card.Content>
            </Card>
            <Card color='blue'>
                <Card.Content>
                    <Card.Header> <a href='/events/Technology' target="_blank" rel="noreferrer">Technology</a></Card.Header>
                    <Card.Meta>200 members</Card.Meta>
                    <Card.Description>Tech community events</Card.Description>
                </Card.Content>
            </Card>
        </Card.Group></div>
}
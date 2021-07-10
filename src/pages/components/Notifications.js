import React from 'react';
import { Item, Header } from 'semantic-ui-react';
import Link from 'next/link';

export default function Notifications(){
    return <div>
        <Header>Notifications</Header>
        <Item.Group divided>
        <Item><Item.Content><a href={`/profiles/003453568`} rel="noreferrer" target="_blank">Judah</a> posted in lab: <a href={`/profiles/`}>Dinner and Dance</a></Item.Content></Item>
        <Item><Item.Content><a href={`/profiles/003453567`} rel="noreferrer" target="_blank">Mack</a> asked a question: </Item.Content></Item>
        </Item.Group>
    </div>
}
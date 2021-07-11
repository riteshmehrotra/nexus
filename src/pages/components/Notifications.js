import React from 'react';
import { Item, Header } from 'semantic-ui-react';
import Link from 'next/link';

export default function Notifications(){
    return <div>
        <Header>Notifications</Header>
        <Item.Group divided>
        <Item><Item.Content><Item.Header><a href={`/profiles/003453568`} rel="noreferrer" target="_blank">Judah</a> posted in lab</Item.Header>
            <Item.Description> <a href='#'>Dinner and Dance</a></Item.Description></Item.Content></Item>
        <Item><Item.Content>
            <Item.Header><a href={`/profiles/003453567`} rel="noreferrer" target="_blank">Mack</a> asked a question</Item.Header>
             <Item.Description><a href="#">Anyone here playing Mobile Legends? How to use Esmeralda?</a></Item.Description></Item.Content></Item>
        </Item.Group>
    </div>
}
import React from 'react';
import { Item, Button, Icon } from 'semantic-ui-react';
import ListLabels from './ListLabels';

const Directory = (props) => {
  let { name, picture, about, interests } = props;
  return (<Item key={name}>
    <Item.Image src={picture}></Item.Image>
    <Item.Content>
      <Item.Header as='a'>{name}</Item.Header>
      <Item.Meta><ListLabels>{interests}</ListLabels></Item.Meta>
      <Item.Description>
        {about}
      </Item.Description>
      <Item.Extra><Button color='black'><Icon name='expand arrows alternate' color='red' />Connect</Button></Item.Extra>
    </Item.Content>
  </Item>)
}

export default Directory;
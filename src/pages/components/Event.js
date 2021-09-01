import React from 'react';
import {Item, Button, Icon} from 'semantic-ui-react';

const Event = (props)=>{
    let {title,date,description} = props;
return (<Item key={title}>
      <Item.Content>
        <Item.Header as='a'>{title}</Item.Header>
        <Item.Meta>{date}</Item.Meta>
        <Item.Description>
            {description}
        </Item.Description>
        <Item.Extra>Published on: NA</Item.Extra>
        <Item.Extra>
          <Button primary floated='right'>
            Register
            <Icon name='right chevron' />
          </Button>
        </Item.Extra>
      </Item.Content>
    </Item>)
}

export default Event;
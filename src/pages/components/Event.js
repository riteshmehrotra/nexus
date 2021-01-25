import React from 'react';
import {Item} from 'semantic-ui-react';

const Event = (props)=>{
    let {title,date,description} = props;
return (<Item key={title}>
      <Item.Content>
        <Item.Header as='a'>{title}</Item.Header>
        <Item.Meta>{date}</Item.Meta>
        <Item.Description>
            {description}
        </Item.Description>
        <Item.Extra>Published on: Jul 01 2019 </Item.Extra>
      </Item.Content>
    </Item>)
}

export default Event;
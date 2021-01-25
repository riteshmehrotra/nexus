import React from 'react';
import { Item } from 'semantic-ui-react';


const SingleItem = (props) => {

    let { title, description } = props;
    return (
        <Item key={title}>
            <Item.Content>
                <Item.Header><a href="#">{title}</a></Item.Header>
                <Item.Description>{description}</Item.Description>
            </Item.Content>
        </Item>
    )
}

export default SingleItem;
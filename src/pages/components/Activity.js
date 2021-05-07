import React,{useState} from 'react';
import { Item, Label } from 'semantic-ui-react';



const Activity = (props) => {
    let { title, points, tag, activity } = props;
    let badge = tag? <>You earned a new badge <Label color="orange">{tag}</Label></>:<></>
    return (
        <Item key={activity}>
            <Item.Content>
                <Item.Header><Label circular color='red'>{points}</Label><a href="#">{title}</a></Item.Header>
                <Item.Description>{activity}</Item.Description>
                <Item.Description>{badge}</Item.Description>
               

                    
            </Item.Content>
        </Item>
    )
}



export default Activity;
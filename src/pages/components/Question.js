import React from 'react';
import { Item, Label, Modal, Button, Divider } from 'semantic-ui-react';
import Thread from './Thread';


const Question = (props) => {
    const {title, author, description, tags } = props;
    const tagLabels = tags? tags.split(",").map((tag) => <Label key={tag}>{tag}</Label>):"";
    const [state, dispatch] = React.useReducer(modalViewReducer, { open: false });
    const { open } = state;
    return (<Item key={title}>
        <Item.Content>
            <Item.Header as='a' onClick={() => { dispatch({ type: 'open' }) }}>{title}</Item.Header>
            <Item.Meta>
                <span className='cinema'>{author}</span>
            </Item.Meta>
            <Item.Description>{description}</Item.Description>
            <Item.Extra>
                {tagLabels}
            </Item.Extra>
            <Modal onClose={() => dispatch({ type: 'close' })} open={open}>
                <Modal.Header>{title}</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                            {description}
                    <Divider></Divider>
                            <Thread></Thread>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='black' onClick={() => { dispatch({ type: 'close' }) }}>
                        Close
                    </Button>
                </Modal.Actions>
            </Modal>
        </Item.Content>
    </Item>);
}

const modalViewReducer = (state, action) => {
    if (action.type === 'close')
        return { open: false };

    if (action.type === 'open')
        return { open: true };
}

export default Question;
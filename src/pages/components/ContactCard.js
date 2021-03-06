import React from 'react';
import PropTypes from 'prop-types';
import { Item, Button,  Modal, Icon, Form, TextArea } from 'semantic-ui-react'
import ListLabels from './ListLabels';

const ContactCard = (props) => {
    const [state, dispatch] = React.useReducer(modalViewReducer, { open: false });
    const { open } = state;
    let { name, picture, about, interests, empID, email } = props;
    // let color = isActive ? "green" : "grey";
    return (<><Item width="100%" href={`/profiles/${empID}`} rel='noreferrer' target='_blank'>
        <Item.Image src={picture}></Item.Image>
        <Item.Content>
            <Item.Header >{name}</Item.Header>
            <Item.Meta><ListLabels>{interests}</ListLabels></Item.Meta>
            <Item.Description>
                {about}
            </Item.Description>
            <Item.Extra><Button color="black" floated='right' as='a' href={`https://teams.microsoft.com/l/chat/0/0?users=${email}`} target='_blank' rel='noreferrer'>
            <Icon name="expand arrows alternate" color='red'></Icon>Connect</Button></Item.Extra>
        </Item.Content>
       

    </Item>
        <Modal onClose={() => dispatch({ type: 'close' })} open={open}>
            <Modal.Header>{name}</Modal.Header>
            <Modal.Content>
                <Form>
                    <TextArea rows='3' placeholder={`Drop a note to ${name}`}></TextArea>
                </Form>
            </Modal.Content>
            <Modal.Actions>
                <Button color='black' onClick={() => { dispatch({ type: 'close' }) }}>
                    Cancel
            </Button>
                <Button
                    content="Send"
                    labelPosition='right'
                    icon='send'
                    onClick={() => dispatch({ type: 'close' })}
                    positive
                />
            </Modal.Actions>
        </Modal></>
    )
}

const modalViewReducer = (state, action) => {
    if (action.type === 'close')
        return { open: false };

    if (action.type === 'open')
        return { open: true };
}

ContactCard.propTypes = {
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    isActive: PropTypes.bool

};


ContactCard.defaultProps = {
    isActive: true
};

export default ContactCard;
import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button, Icon, Modal, Label, Divider } from 'semantic-ui-react'

const ProjectCard = (props) => {
    const [state, dispatch] = React.useReducer(modalViewReducer, { open: false });
    const { open } = state;
    let { author, title, description, isActive, techStack, contributors } = props;
    let color = isActive ? "green" : "grey";
    return (<><Card style={{padding:'5px'}} color={color} raised>
        <Card.Content>
            <Card.Header>{title}</Card.Header>
            <Card.Meta><Label>{author}</Label></Card.Meta>
            <Card.Description><Label as='a' color='green' ribbon>
                {techStack}
            </Label></Card.Description>
            <Card.Description>{description}</Card.Description>
        </Card.Content>
        <Card.Content extra><Icon name="user times" ></Icon>{contributors} contributors<Button color="black" floated='right' onClick={() => { dispatch({ type: 'open' }) }}>
            <Icon name="eye" color='yellow'></Icon>View</Button></Card.Content>
            
    </Card>
        <Modal onClose={() => dispatch({ type: 'close' })} open={open}>
            <Modal.Header>{title}</Modal.Header>
            <Modal.Content>
                <Modal.Description>
                        <Label as='a'>
                            {techStack}
                        </Label>
                        <Divider hidden></Divider>
                            {description}
                            <Divider></Divider>
                            <Label color="green" as='a'><Icon name='git'></Icon><Label.Detail>View source</Label.Detail></Label>
                            <Label color="blue" as='a'><Icon name='chat'></Icon><Label.Detail>Ask a question</Label.Detail></Label>
                        
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button color='black' onClick={() => { dispatch({ type: 'close' }) }}>
                    Cancel
                    </Button>
                <Button
                    content="Join"
                    labelPosition='right'
                    icon='fork'
                    onClick={() => dispatch({ type: 'close' })}
                    positive
                />
            </Modal.Actions>
        </Modal></>)
}

const modalViewReducer = (state, action) => {
    if (action.type === 'close')
        return { open: false };

    if (action.type === 'open')
        return { open: true };
}

ProjectCard.propTypes = {
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    isActive: PropTypes.bool

};


ProjectCard.defaultProps = {
    isActive: true
};

export default ProjectCard;
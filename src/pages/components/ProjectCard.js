import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button, Icon, Modal, Label, Divider, Header } from 'semantic-ui-react'
import ListLabels from './ListLabels';

const ProjectCard = (props) => {
    let { author, title, description, techStack, contributors, requiresApproval,id } = props;
    const [state, dispatch] = React.useReducer(modalViewReducer, { open: false, needsApproval: false });
    const { open, needsApproval } = state;
    return (<><Card style={{ padding: '5px' }} raised >
        <Card.Content>
            <Card.Header><a href={`/projects/${id}`} target="_blank" rel="noreferrer">{title}</a></Card.Header>
            <Card.Meta><Label color='green' ribbon>{author}</Label></Card.Meta>
            <Card.Description>
            {(techStack)?
                <Label.Group>
                <ListLabels>{techStack.split(",")}</ListLabels>
            </Label.Group>
            :<div/>}
            </Card.Description>
            <Card.Description>{description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
            <Icon name="user times" ></Icon>{contributors} contributors
            {requiresApproval ? 
            <Button floated='right' onClick={(requiresApproval) => { dispatch({ type: 'open', needsApproval:true }) }}>
            <Icon name="hand paper" color='red'></Icon>Show interest</Button> 
            : <Button floated='right' onClick={(requiresApproval) => { dispatch({ type: 'open', needsApproval:false }) }}>
                <Icon name="handshake" color='red'></Icon>Join</Button>}
                </Card.Content>

    </Card>
        <Modal onClose={() => dispatch({ type: 'close' })} open={open}>
            <Modal.Header>{title}</Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    <Header>{needsApproval?`Thank you for your interest to join ${title}. We will reach out to you shortly`:`Welcome! You have joined ${title} project`}</Header>
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
                <Button onClick={() => { dispatch({ type: 'close' }) }}>
                    Close
                    </Button>
                {/* <Button
                    content="Join"
                    labelPosition='right'
                    icon='fork'
                    onClick={() => dispatch({ type: 'close' })}
                    positive
                /> */}
            </Modal.Actions>
        </Modal></>)
}

const modalViewReducer = (state, action) => {
    if (action.type === 'close')
        return { open: false, needsApproval: action.needsApproval };

    if (action.type === 'open')
        return { open: true, needsApproval: action.needsApproval };
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
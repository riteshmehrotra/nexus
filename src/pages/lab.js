import React from 'react'
import ProjectCard from './components/ProjectCard';
import { Card, Button, Container, Grid, Form, Input, Icon, Modal, Label } from 'semantic-ui-react';
import useSWR from 'swr'


const fetcher = (url) => fetch(url).then((res) => res.json());
export default function Projects() {
    const { data, error } = useSWR('/api/projects', fetcher)
    const [state, dispatch] = React.useReducer(modalViewReducer, { open: false });
    const [skills, addSkills] = React.useState([])
    const [description, setDescription] = React.useState("");

    const { open } = state;
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    let projectCardMap = data.map((item) => <ProjectCard key={item.title} {...item}></ProjectCard>)
    const suggestions = findSuggestions(description);
    let suggestionLabels = suggestions.map(suggestion => <Label onClick={(e) => addSkills(current=>[...current,e.target.textContent])}>{suggestion}</Label>)
    let skillLabels = skills.map(each=>`${each}, `)
    return <Grid>
        <Grid.Row>
            <Button color="black" floated='right' onClick={() => { dispatch({ type: 'open' }) }}>
                <Icon name="add" color='yellow'></Icon>Add new</Button>
            {/* <Button floated='right' color='green'>Add a new project</Button> */}
            <Modal onClose={() => dispatch({ type: 'close' })} open={open}>
                <Modal.Header>Add project</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <Form>
                            <Form.Input label="Title" />
                            <Form.TextArea label="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                            <Form.Field hidden={suggestionsHidden(suggestions)}>
                                <label>Suggested skills</label>
                                <Label.Group>
                                    {suggestionLabels}
                                </Label.Group>
                            </Form.Field>
                            <Form.Field>
                                <label>Add skills</label>
                                <div contentEditable='true'>{skillLabels}</div>
                            </Form.Field>
                            <Form.Checkbox label="Approval needed to join?" />
                        </Form>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='black' onClick={() => { dispatch({ type: 'close' }) }}>
                        Cancel
                    </Button>
                    <Button
                        content="Share"
                        labelPosition='right'
                        icon='fork'
                        onClick={() => dispatch({ type: 'close' })}
                        positive
                    />
                </Modal.Actions>
            </Modal>
        </Grid.Row>
        <Grid.Row>
            <Card.Group>{projectCardMap}</Card.Group>
        </Grid.Row>
    </Grid>
}

const modalViewReducer = (state, action) => {
    if (action.type === 'close')
        return { open: false };

    if (action.type === 'open')
        return { open: true };
}

const suggestionsHidden = (suggestions) => suggestions.length > 0 ? false : true;

const findSuggestions = (description) => {
    const suggestions = [];

    if (description.length <= 0)
        return suggestions;
    const mappings = [{ key: "mobile", value: ['iOS', 'Android', 'React native'] },
    { key: "web", value: ['ReactJS', 'Javascript', 'HTML'] },
    { key: "design", value: ['Design thinking', 'UXP'] },
    { key: "project", value: ['Project management', 'Planning'] }]

    const descAsArray = description.split(" ");
    mappings.map((each) => {
        if (descAsArray.indexOf(each.key) > -1)
            suggestions.push(...each.value)
    })

    return suggestions;

}



// export default Projects;
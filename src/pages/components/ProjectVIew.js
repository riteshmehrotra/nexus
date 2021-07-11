import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button, Icon, Modal, Label, Divider, Header, Grid } from 'semantic-ui-react'

const ProjectView = (props) => {
    let { author, title, description, techStack, contributors, requiresApproval } = props;
    return (<Grid>
        <Grid.Row>
            <Grid.Column>
                <Label as='a'>
                    {techStack}
                </Label>
                <Divider hidden></Divider>
                {description}
                <Divider></Divider>
                <Label color="green" as='a'><Icon name='git'></Icon><Label.Detail>View source</Label.Detail></Label>
                <Label color="blue" as='a'><Icon name='chat'></Icon><Label.Detail>Ask a question</Label.Detail></Label>
            </Grid.Column>
        </Grid.Row>
    </Grid>)
}


ProjectView.propTypes = {
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    isActive: PropTypes.bool

};


ProjectView.defaultProps = {
    isActive: true
};

export default ProjectView;
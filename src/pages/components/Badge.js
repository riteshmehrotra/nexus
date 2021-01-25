import React from 'react';
import PropTypes from 'prop-types';
import { List, Label, Grid } from 'semantic-ui-react';


const Badge = (props) => {
    let { title, description, points } = props;
    return (
        <List.Item key={title}>
            <List.Content verticalAlign="middle">
                <List.Header>
                    <Grid columns={2}>
                        <Grid.Row>
                            <Grid.Column>
                                {title}
                            </Grid.Column>
                            <Grid.Column>
                                <Label circular color='red'>{points}</Label>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </List.Header>
                <List.Description><Grid columns={1}><Grid.Row><Grid.Column>{description}</Grid.Column></Grid.Row></Grid></List.Description>
            </List.Content>
        </List.Item>
    );
}


Badge.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    points: PropTypes.number.isRequired
}
export default Badge;
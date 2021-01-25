
import React from 'react';
import { Item, Divider, Icon, Button, Grid } from 'semantic-ui-react';
import useSWR from 'swr';
import Question from './components/Question';

const fetcher = (url) => fetch(url).then((res) => res.json());
export default function forum() {
    const {data, error} = useSWR('/api/forum', fetcher)
    if (error) return <div>Failed to load</div>
    if(!data) return <div>Loading...</div>
    let projectCardMap = data.map((item) => <Question key={item.title} {...item}></Question>)
    return <Grid><Grid.Row><Grid.Column><Button floated="right" color="blue">Ask a question</Button><Divider hidden></Divider></Grid.Column></Grid.Row><Grid.Row><Grid.Column><Item.Group divided>{projectCardMap}</Item.Group></Grid.Column></Grid.Row></Grid>
}

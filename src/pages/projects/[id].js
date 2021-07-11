import React from 'react';
import { Grid, Item, Input,Label, Divider, Icon, Header } from 'semantic-ui-react';
import useSWR from 'swr';
import ContactCard from '../components/ContactCard';
import { useRouter } from 'next/router'
import ListLabels from '../components/ListLabels';

const fetcher = (url) => fetch(url).then((res) => res.json());
export default function projects() {
    const router = useRouter();
    const { id } = router.query;
    const { data, error } = useSWR(`/api/projects/${id}`, fetcher)
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    let { author, title, description, techStack, contributors, requiresApproval } = data;


    return <Grid columns={2}>
        <Grid.Row divided>
            <Grid.Column width={12}>
                <h1>{title}</h1>
                <h4>{author}</h4>
                <Label.Group>
                    <ListLabels>{techStack.split(",")}</ListLabels>
                </Label.Group>
                <Divider hidden></Divider>
                {description}
                <Divider></Divider>
                <Label color="green" as='a'><Icon name='git'></Icon><Label.Detail>View source</Label.Detail></Label>
                <Label color="blue" as='a'><Icon name='chat'></Icon><Label.Detail>Ask a question</Label.Detail></Label>
            </Grid.Column>
      
            <Grid.Column width={4}>
                <Header><Icon color='red' name='expand arrows alternate'></Icon>Matching profiles</Header>
                <Item.Group link divided>
                    <Item><Item.Content><Item.Header><a href='/profiles/003453566' rel='noreferrer' target='_blank'>Ritesh Mehrotra</a></Item.Header><Item.Meta><Label.Group><Label><Icon name='check' color='green'></Icon> Java</Label><Label><Icon name='check' color='green'></Icon> ReactJS</Label></Label.Group></Item.Meta></Item.Content></Item>
                    <Item><Item.Content><Item.Header><a href='/profiles/003453568' rel='noreferrer' target='_blank'>Judah Tan</a></Item.Header><Item.Meta><Label.Group><Label ><Icon name='check' color='green'></Icon> Project management</Label></Label.Group></Item.Meta></Item.Content></Item>
                    <Item><Item.Content><Item.Header><a href='/profiles/003453567' rel='noreferrer' target='_blank'>Reymark Diaz</a></Item.Header><Item.Meta><Label.Group><Label><Icon name='check' color='green'></Icon> Agile</Label><Label><Icon name='check' color='green'></Icon> Node</Label></Label.Group></Item.Meta></Item.Content></Item>
                </Item.Group>
            </Grid.Column>
        </Grid.Row>
    </Grid>
}

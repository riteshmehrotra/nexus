import React from 'react';
import { Image, Segment, Divider, Icon, Grid } from 'semantic-ui-react';
import useSWR from 'swr';
import ListLabels from './components/ListLabels';

const fetcher = (url) => fetch(url).then((res) => res.json());
export default function myprofile() {
    const { data, error } = useSWR('/api/profiles/003453566', fetcher)
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    return <Segment>
        <Grid columns={2}>
            <Divider vertical><Icon name='arrow circle right'></Icon></Divider>
            <Grid.Column textAlign='center'>
                <Image src={data.picture}></Image>
                <h1>{data.name}</h1>
            </Grid.Column>
            <Grid.Column>
                <h3>{data.about}</h3>
                <h4>Interests</h4>
                <ListLabels>{data.interests}</ListLabels>
            </Grid.Column>
        </Grid></Segment>
}



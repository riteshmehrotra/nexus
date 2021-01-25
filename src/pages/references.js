import React from 'react';
import { Item, Input, Grid, Divider } from 'semantic-ui-react';
import SingleItem from './components/SingleItem';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());
export default function references() {
    const {data, error} = useSWR('/api/references', fetcher)
    if (error) return <div>Failed to load</div>
    if(!data) return <div>Loading...</div>
    let referencesMap = data.map((item) => <SingleItem key={item.title} {...item}></SingleItem>)
    return <><Grid.Row floated='right'><Input focus icon='search' placeholder='Search anywhere on intranet' color='red' floated='right' fluid/><Divider hidden></Divider></Grid.Row><Grid.Row>
        <Item.Group divided>{referencesMap}</Item.Group></Grid.Row></>
}

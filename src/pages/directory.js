import React from 'react';
import { Grid, Item, Input, Label } from 'semantic-ui-react';
import Directory from './components/Directory';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());
export default function directory() {
    const { data, error } = useSWR('/api/match/003453566', fetcher)
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    let profiles = data.map((item) => <Directory key={item.empID} {...item}></Directory>)
    return <Grid>
        <h2>Profiles insipired from your <a href="/myprofile">interests</a></h2>
        <Item.Group divided>{profiles}</Item.Group>
    </Grid>
}

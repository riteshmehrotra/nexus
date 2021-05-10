import React from 'react';
import { Grid, Item, Input, Label } from 'semantic-ui-react';
import useSWR from 'swr';
import ContactCard from './components/ContactCard';

const fetcher = (url) => fetch(url).then((res) => res.json());
export default function directory() {
    const { data, error } = useSWR('/api/match/003453566', fetcher)
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    let profiles = data.map((item) => <ContactCard key={item.empID} {...item}></ContactCard>)
    return <Grid columns={3}>
        <Grid.Row>
            <Grid.Column width={7}>
                <h2>Profiles insipired from your <a href="/myprofile">interests</a></h2>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column width={13}>
                <Item.Group divided>{profiles}</Item.Group>
            </Grid.Column>
        </Grid.Row>
    </Grid>
}

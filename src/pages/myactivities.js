import React from 'react';
import { Item, Label } from 'semantic-ui-react';
import useSWR from 'swr';
import Activity from './components/Activity';

const fetcher = (url) => fetch(url).then((res) => res.json());
export default function myactivities() {
    const { data, error } = useSWR('/api/activities', fetcher)
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    let referencesMap = data.map((item) => <Activity key={item.activity} {...item}></Activity>)
    return <Item.Group divided><h2>Total: <Label size="huge" color='orange' tag>40 points</Label></h2> {referencesMap}</Item.Group>
}

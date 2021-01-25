import React from 'react';
import { Item} from 'semantic-ui-react';
import Event from '../pages/components/Event';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());
export default function events() {
    const {data, error} = useSWR('/api/events', fetcher)
    if (error) return <div>Failed to load</div>
    if(!data) return <div>Loading...</div>
    let projectCardMap = data.map((item) => <Event key={item.title} {...item}></Event>)
    return <Item.Group divided>{projectCardMap}</Item.Group>
}

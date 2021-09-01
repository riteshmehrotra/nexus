import React from 'react';
import { Item} from 'semantic-ui-react';
import Event from '../components/Event';
import useSWR from 'swr';
import { useRouter } from 'next/router'

const fetcher = (url) => fetch(url).then((res) => res.json());
export default function events() {
    const router = useRouter();
    const { spaceID } = router.query;
    const {data, error} = useSWR('/api/events', fetcher)
    if (error) return <div>Failed to load</div>
    if(!data) return <div>Loading...</div>
    let projectCardMap = data.map((item) => <Event key={item.title} {...item}></Event>)
    return <Item.Group divided><h1>{spaceID}</h1>{projectCardMap}</Item.Group>
}

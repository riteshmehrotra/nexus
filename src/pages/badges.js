import React from 'react';
import Badge from './components/Badge';
import { List } from 'semantic-ui-react';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

const badges = () => {
    const { data, error } = useSWR('/api/badges', fetcher)
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    let badgesMap = data.map((item)=><Badge key={item.title} {...item}></Badge>)
    return <List divided>{badgesMap}</List>

}

export default badges;
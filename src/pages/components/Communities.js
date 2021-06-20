import React from 'react';
import { Item, ItemGroup, Header } from 'semantic-ui-react';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());
const Communities = ({id}) => {
    const { data, error } = useSWR(`/api/communities/${id}`, fetcher);

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    let items = data.communities.map((item) => <Item><Item.Content><a href={item.link} rel="noreferrer" target='_blank'>{item.title}</a></Item.Content></Item>);
    return <>
        <Header>Communities</Header>
        <ItemGroup>
            {items}
        </ItemGroup>
    </>
}


export default Communities;
import React from 'react';
import { Item, ItemGroup, LabelGroup, Label } from 'semantic-ui-react';
import useSWR from 'swr';
import ListLabels from './ListLabels';

const fetcher = (url) => fetch(url).then((res) => res.json());
const Rewards = ({ id }) => {
    const { data, error } = useSWR(`/api/rewards/${id}`, fetcher);

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    return <div>
        <h4>Reputation <Label circular color='red'>{data.points}</Label></h4> 
        <h4>Badges</h4>
        <LabelGroup>
            <ListLabels>{data.badges}</ListLabels>
        </LabelGroup>
    </div>
}


export default Rewards;
import React from 'react';
import { Icon,Item, ItemGroup, LabelGroup, Label } from 'semantic-ui-react';
import useSWR from 'swr';
import ListLabels from './ListLabels';

const fetcher = (url) => fetch(url).then((res) => res.json());
const Rewards = ({ id }) => {
    const { data, error } = useSWR(`/api/rewards/${id}`, fetcher);

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    return <div>
        <h4><Icon name="flag checkered" color='red'></Icon>Reputation <Label circular>{data.points}</Label></h4> 
        <h4><Icon name="certificate" color='red'></Icon>Badges</h4>
        <LabelGroup>
            <ListLabels>{data.badges}</ListLabels>
        </LabelGroup>
    </div>
}


export default Rewards;
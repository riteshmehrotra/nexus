import React from 'react'
import {Card, Image,Button, Icon} from 'semantic-ui-react';
import Rewards from './Rewards';

const ProfileCard = ({data})=>{
    return  <Card fluid>
    <Image fluid src={data.picture} ></Image>
    <Card.Content>
        <Card.Header>{data.name}</Card.Header>
        <Card.Description>{data.about}</Card.Description>
    </Card.Content>
    <Card.Content extra>
        <Rewards id={data.empID}></Rewards>
    </Card.Content>
    <Card.Content extra textAlign='center'>
        <div>
            <Button floated='right' color='black' as='a' href={`https://teams.microsoft.com/l/chat/0/0?users=${data.email}`} target='_blank' rel='noreferrer'>
                <Icon color='red' name='expand arrows alternate' />
            Connect
            </Button>
        </div>
    </Card.Content>
</Card>
}

export default ProfileCard;
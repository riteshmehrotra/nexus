import React from 'react';
import { Image, Segment, Divider, Icon, Label, Grid, LabelGroup, Container, Card, Header, ButtonGroup, Button } from 'semantic-ui-react';
import useSWR from 'swr';
import ListLabels from '../components/ListLabels';
import Membership from '../components/Membership';
import Rewards from '../components/Rewards';
import { useRouter } from 'next/router'
import ProfileCard from '../components/ProfileCard';

const fetcher = (url) => fetch(url).then((res) => res.json());
export default function myprofile() {

    const router = useRouter();
    const { empID } = router.query;
    const { data, error } = useSWR(`/api/profiles/${empID}`, fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    return <Grid container centered divided columns={2}>
        <Grid.Row>
            <Grid.Column width={5}>
                <ProfileCard data={data}></ProfileCard>
                {/* <a href={`https://teams.microsoft.com/_#/apps/a2da8768-95d5-419e-9441-3b539865b118/search?q=${data.name}`}>Chat</a> */}
            </Grid.Column>
            <Grid.Column>
                <Header>Interests</Header>
                <ListLabels>{data.interests}</ListLabels>
                <Header>Professional licenses/Certifications</Header>
                <LabelGroup><ListLabels>{data.achievements}</ListLabels></LabelGroup>
                <Membership id={empID}></Membership>
            </Grid.Column>
        </Grid.Row>
    </Grid>
}



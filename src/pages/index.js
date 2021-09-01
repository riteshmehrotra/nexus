import React from 'react';
import useSWR from 'swr';
import 'semantic-ui-css/semantic.min.css'
import Leaderboard from './components/Leaderboard';
import { Grid, Card, Image, Icon, Label } from 'semantic-ui-react';
import Forum from './forum';
import Events from './events/[spaceID]';
import ProfileCard from './components/ProfileCard';
import SpaceCard from './components/SpaceCard';

const fetcher = (url) => fetch(url).then((res) => res.json());

const index = () => {
   const { data, error } = useSWR(`/api/profiles/003453566`, fetcher)

   if (error) return <div>Failed to load</div>
   if (!data) return <div>Loading...</div>
   return <Grid columns='3'>
      <Grid.Row>
         <Grid.Column>
            <ProfileCard data={data}></ProfileCard>
         </Grid.Column>
         <Grid.Column>
            <h2>From your spaces</h2  >
            <SpaceCard /></Grid.Column>
         {/* <Grid.Column>
            <h2>Top 5 reputations of month</h2  >
            <Leaderboard></Leaderboard>
            <h2>Upcoming Events</h2>
            <Events></Events>

         </Grid.Column> */}
      </Grid.Row>
   </Grid>;
}

export default index;
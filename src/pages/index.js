import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import Leaderboard from './components/Leaderboard';
import { Grid, Card, Image, Icon, Label } from 'semantic-ui-react';
import Forum from './forum';
import Events from './events';

const index = () => {
   return <Grid columns='3'>
      <Grid.Row>
         <Grid.Column>
            <Card>
               <Image src='/images/avatar/matthew.png' wrapped ui={false} />
               <Card.Content>
                  <Card.Header>Tom</Card.Header>
                  <Card.Meta>
                     <span className='date'>Joined in 2020</span>
                  </Card.Meta>
                  <Card.Description>
                     Keep calm and code
      </Card.Description>
               </Card.Content>
               <Card.Content extra>
                  <a href='#'>
                     <Icon name='user' />
        Reputation 50
      </a>
               </Card.Content>
               <Card.Content extra>
                  <Label>Teacher</Label>
                  <Label>Scholar</Label>
               </Card.Content>
               <Card.Content extra>
                  <a href='#'>
                     <Icon name='user' />
        22 followers
      </a>
               </Card.Content>
            </Card>
         </Grid.Column>
         <Grid.Column>
         <h2>Top questions today</h2  >
            <Forum/></Grid.Column>
         <Grid.Column>
            <h2>Top 5 reputations of month</h2  >
            <Leaderboard></Leaderboard>
         </Grid.Column>
      </Grid.Row>
      <Grid.Row>
         <Grid.Column></Grid.Column>
         <Grid.Column></Grid.Column>
         <Grid.Column>
            <h2>Upcoming Events</h2>
            <Events></Events></Grid.Column>

      </Grid.Row>
   </Grid>;
}

export default index;
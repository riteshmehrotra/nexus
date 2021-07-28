import React from 'react';
import Badge from './components/Badge';
import { List, Label, Grid, Icon } from 'semantic-ui-react';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

const rewards = () => {
    const { data, error } = useSWR('/api/badges', fetcher)
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    let badgesMap = data.map((item) => <Badge key={item.title} {...item}></Badge>)
    let rewards = rewardAlgo().map((item) => <Badge key={item.title} {...item}></Badge>)
    return <>
        <h1>Recognition</h1>
        <p>Your every contribution earns you reward points</p>
        <List divided>{rewards}</List>
        <h1>Badges</h1>
        <p>Earn badges by accumulating rewards</p>
        
        <List divided>
            <List.Item>
                <List.Content verticalAlign="middle">
                    <Grid>
                        <Grid.Row columns={2}>
                            <Grid.Column>
                            <Label size='large' color='black'><Icon name='star' color='yellow'></Icon>Teacher</Label>
                            </Grid.Column>
                            <Grid.Column>
                                Answer 3 questions with one or more likes to earn this badge
                            </Grid.Column>
                        </Grid.Row>
                        
                        <Grid.Row columns={2}>
                            <Grid.Column>
                            <Label size='large' color='black'><Icon name='star' color='yellow'></Icon>Scholar</Label>
                            </Grid.Column>
                            <Grid.Column>
                                Ask a question and accept an answer
                            </Grid.Column>
                        </Grid.Row> 
                        <Grid.Row columns={2}>
                            <Grid.Column>
                            <Label size='large' color='black'><Icon name='star' color='yellow'></Icon>Blogger</Label>
                            </Grid.Column>
                            <Grid.Column>
                                Add your blog
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={2}>
                            <Grid.Column>
                            <Label size='large' color='black'><Icon name='star' color='orange'></Icon>Commentator</Label>
                            </Grid.Column>
                            <Grid.Column>
                                Leave comments on 10 posts
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={2}>
                            <Grid.Column>
                            <Label size='large' color='black'><Icon name='star' color='green'></Icon>Guru</Label>
                            </Grid.Column>
                            <Grid.Column>
                                Answer 10 questions with one or more likes
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={2}>
                            <Grid.Column>
                            <Label size='large' color='black'><Icon name='star' color='green'></Icon>Trailblazer</Label>
                            </Grid.Column>
                            <Grid.Column>
                                Contribue to 2 projects
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={2}>
                            <Grid.Column>
                            <Label size='large' color='black'><Icon name='star' color='red'></Icon>Fanatic</Label>
                            </Grid.Column>
                            <Grid.Column>
                                Contribute to Nexus daily for 100 days
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                   
                </List.Content>
            </List.Item>
        </List>
    </>

}


const rewardAlgo = () => {
    let rewardCollection = [{ title: "Ask a question", points: 5 }, { title: "Like a question or answer", points: 1 }, { title: "Answer a question", points: 5 }
        , { title: "Accept an question", points: 2 }, { title: "Add interests to your profile", points: 5 }, { title: "Add a project", points: 10 }, { title: "Join a project", points: 5 }];
    return rewardCollection;
}
export default rewards;
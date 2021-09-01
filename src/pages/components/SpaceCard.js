import React from 'react';
import { Card, Feed } from 'semantic-ui-react';

export default function SpaceCard() {
    return <Card>
            <Card.Content>
                <Card.Header>Recent updates</Card.Header>
                <Feed>
                    <Feed.Event>
                        <Feed.Label image='/images/avatar/small/jenny.jpg' />
                        <Feed.Content>
                            <Feed.Date content='1 day ago' />
                            <Feed.Summary>
                                New project <a>CSR initiative</a> added to your <a>CSR</a> space.
                            </Feed.Summary>
                        </Feed.Content>
                    </Feed.Event>
                    <Feed.Event>
                        <Feed.Label image='/images/avatar/small/jenny.jpg' />
                        <Feed.Content>
                            <Feed.Date content='2 day ago' />
                            <Feed.Summary>
                                <a>4</a> new questions in <a>Technology</a> space.
                            </Feed.Summary>
                        </Feed.Content>
                    </Feed.Event>
                </Feed>
            </Card.Content>
        </Card>
       
}
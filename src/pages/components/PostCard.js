import React from 'react';
import { Comment, Header, Form, Button, Item, Label } from 'semantic-ui-react';

const PostCard = () => {
    return (<>
        <Item>

            <Item.Content>
                <Item.Header as='a'>E-sign API for PDF documents</Item.Header>
                <Item.Meta>
                    <span className='cinema'>Ritesh Mehrotra</span>
                </Item.Meta>
                <Item.Description>lorem sdfmsaofas</Item.Description>
                <Item.Extra>
                    <Label>Java</Label>
                    <Label>API</Label>
                    <Label>Concurrency</Label>
                </Item.Extra>
            
            <Comment.Group threaded>
            <Header as='h3' dividing>
                Comments
    </Header>

            <Comment>
                <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
                <Comment.Content>
                    <Comment.Author as='a'>Matt</Comment.Author>
                    <Comment.Metadata>
                        <span>Today at 5:42PM</span>
                    </Comment.Metadata>
                    <Comment.Text>How artistic!</Comment.Text>
                    <Comment.Actions>
                        <a>Reply</a>
                    </Comment.Actions>
                </Comment.Content>
            </Comment>

            <Comment>
                <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                <Comment.Content>
                    <Comment.Author as='a'>Elliot Fu</Comment.Author>
                    <Comment.Metadata>
                        <span>Yesterday at 12:30AM</span>
                    </Comment.Metadata>
                    <Comment.Text>
                        <p>This has been very useful for my research. Thanks as well!</p>
                    </Comment.Text>
                    <Comment.Actions>
                        <a>Reply</a>
                    </Comment.Actions>
                </Comment.Content>

                <Comment.Group>
                    <Comment>
                        <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
                        <Comment.Content>
                            <Comment.Author as='a'>Jenny Hess</Comment.Author>
                            <Comment.Metadata>
                                <span>Just now</span>
                            </Comment.Metadata>
                            <Comment.Text>Elliot you are always so right :)</Comment.Text>
                            <Comment.Actions>
                                <a>Reply</a>
                            </Comment.Actions>
                        </Comment.Content>
                    </Comment>
                </Comment.Group>
            </Comment>

            <Comment>
                <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
                <Comment.Content>
                    <Comment.Author as='a'>Joe Henderson</Comment.Author>
                    <Comment.Metadata>
                        <span>5 days ago</span>
                    </Comment.Metadata>
                    <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
                    <Comment.Actions>
                        <a>Reply</a>
                    </Comment.Actions>
                </Comment.Content>
            </Comment>

            <Form reply>
                <Form.TextArea />
                <Button content='Add Reply' labelPosition='left' icon='edit' primary />
            </Form>
        </Comment.Group>
        </Item.Content>
        </Item>

        


    </>)



}

export default PostCard;
import React from 'react';
import {Comment, Form, Button} from 'semantic-ui-react';

const Thread = ()=>{
    return (<Comment.Group>
        <Comment>
          <Comment.Avatar as='a' src='/images/avatar/joe.jpg' />
          <Comment.Content>
            <Comment.Author>Joe Henderson</Comment.Author>
            <Comment.Metadata>
              <div>1 day ago</div>
            </Comment.Metadata>
            <Comment.Text>
              Raise a JIRA ticket here https://sia-standardpipeline.works
            </Comment.Text>
            <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>
    
        <Comment>
          <Comment.Avatar as='a' src='/images/avatar/christian.jpg' />
          <Comment.Content>
            <Comment.Author>Christian Rocha</Comment.Author>
            <Comment.Metadata>
              <div>2 days ago</div>
            </Comment.Metadata>
            <Comment.Text>Even I need to know. Any help?</Comment.Text>
            <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>
    
        <Form reply>
          <Form.TextArea />
          <Button content='Add Comment' labelPosition='left' icon='edit' primary />
        </Form>
      </Comment.Group>)
}


export default Thread;
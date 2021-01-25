import React from 'react';
import PropTypes from 'prop-types';
import {Table, Header} from 'semantic-ui-react';

const Leaderboard = (props)=>{
let {name, points, solutions} = props;
return <Table  color="orange">
<Table.Header>
  <Table.Row>
    <Table.HeaderCell>Name</Table.HeaderCell>
    <Table.HeaderCell>Reputation</Table.HeaderCell>
  </Table.Row>
</Table.Header>

<Table.Body>
  <Table.Row>
    <Table.Cell>
      <Header as='h4' image>
        <Header.Content>
          Robin
        </Header.Content>
      </Header>
    </Table.Cell>
    <Table.Cell>22</Table.Cell>
  </Table.Row>
  <Table.Row>
    <Table.Cell>
      <Header as='h4' image>
        <Header.Content>
          Matthew
        </Header.Content>
      </Header>
    </Table.Cell>
    <Table.Cell>15</Table.Cell>
  </Table.Row>
  <Table.Row>
    <Table.Cell>
      <Header as='h4' image>
        <Header.Content>
          Lindsay
        </Header.Content>
      </Header>
    </Table.Cell>
    <Table.Cell>12</Table.Cell>
  </Table.Row>
  <Table.Row>
    <Table.Cell>
      <Header as='h4' image>
        <Header.Content>
          Mark
        </Header.Content>
      </Header>
    </Table.Cell>
    <Table.Cell>11</Table.Cell>
  </Table.Row>
</Table.Body>
</Table>
}

// Leaderboard.propTypes = 
// {
//     name: PropTypes.string.isRequired,
//     points: PropTypes.number.isRequired,
//     solutions: PropTypes.number.isRequired
// }

export default Leaderboard;
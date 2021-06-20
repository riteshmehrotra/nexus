import React from 'react'
import Header from './Header';
import { Container, Grid, GridColumn, Divider } from 'semantic-ui-react';

const Layout = ({ empID,children }) => {
    return <><Container fluid>
        <Grid centered columns={1}>
            <GridColumn>
                <Header id={empID}></Header>
            </GridColumn>
            
        </Grid>
        <Divider hidden></Divider>
        <Grid centered columns={1}>
                <GridColumn>
                    <Container>
                    {children}
                    </Container>
                </GridColumn>
            </Grid>
    </Container></>
}


export default Layout;
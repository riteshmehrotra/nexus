import React from 'react';
import {Label} from 'semantic-ui-react';

const ListLabels = (props)=>{
    let interests = props.children.map((item) => <Label key={item}>{item}</Label>)
    return interests;
}

export default ListLabels;
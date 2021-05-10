import React from 'react';
import { Item} from 'semantic-ui-react';
import Directory from './components/Directory';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());
export default function events() {
    const {data, error} = useSWR('/api/profiles', fetcher)
    if (error) return <div>Failed to load</div>
    if(!data) return <div>Loading...</div>
    let profiles = data.map((item) => <Directory key={item.empID} {...item}></Directory>)
    return <div><h2>Profiles insipired from your interest</h2><Item.Group divided>{profiles}</Item.Group></div>
}

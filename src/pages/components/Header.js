import React, { useState } from 'react';
import { Menu, Icon, Divider, Container, Label } from 'semantic-ui-react';
import styles from './logostyle.module.css';
import Link from 'next/link'
import { useRouter } from 'next/router'


const Header = ({ id }) => {
    const router = useRouter();
    const menu = pathToTitle(router.pathname)==="signin"? <LoggedOutMenu></LoggedOutMenu>:<LoggedInMenu id={id}></LoggedInMenu>;
    return <div>
        {menu}
        <Divider hidden></Divider>
        <Container>
            <Divider hidden></Divider>
        </Container>
    </div>
}


const LoggedInMenu = ({id}) => {
    const router = useRouter();
    const [currentMenu, setCurrentMenu] = useState(pathToTitle(router.pathname));

    const onClickMenu = (name, icon) => { setCurrentMenu(name) }// setCurrentIcon(icon); }

    return <Menu stackable inverted>
        <Link href="/"><Menu.Item onClick={() => onClickMenu("Dashboard", "connectdevelop")} active={isActive("/", router.pathname)} ><h2><Icon color='orange' size='large' className={styles.Applogo} name='connectdevelop'></Icon>Nexus</h2></Menu.Item></Link>
        <Link href={`/directory/${id}`}><Menu.Item onClick={() => onClickMenu("KrisMatch", "expand arrows alternate")} active={isActive(`/directory${id}`, router.pathname)}><Icon color='red' name='expand arrows alternate'></Icon>KrisMatch</Menu.Item></Link>
        <Link href="/lab"><Menu.Item onClick={() => onClickMenu("Lab", "lab")} active={isActive("/lab", router.pathname)}><Icon color='yellow' name='lab'></Icon>Lab</Menu.Item></Link>
        {/* <Link href="/insights"><Menu.Item onClick={() => onClickMenu("Insights", "eye")} active={isActive("/insights", router.pathname)}><Icon color='red' name='eye'></Icon>Insights</Menu.Item></Link> */}
        {/* <Link href="/challenges"><Menu.Item active={isActive("/challenges", router.pathname)}><Icon color='green' name='chess board'></Icon>Challenges</Menu.Item></Link> */}
        <Link href="/forum"><Menu.Item onClick={() => onClickMenu("Forum", "question")} active={isActive("/forum", router.pathname)}><Icon color='blue' name='question'></Icon>Forum</Menu.Item></Link>
        <Link href="/recordings"><Menu.Item onClick={() => onClickMenu("#TechTalks Recordings", "record")} active={isActive("/recordings", router.pathname)}><Icon color='purple' name='record'></Icon>#TechTalks Recordings</Menu.Item></Link>
        <Link href="/events"><Menu.Item onClick={() => onClickMenu("Events", "calendar alternate outline")} active={isActive("/events", router.pathname)}><Icon color='olive' name='calendar alternate outline'></Icon>Events</Menu.Item></Link>
        <Link href="/references"><Menu.Item onClick={() => onClickMenu("References", "newspaper outline")} active={isActive("/references", router.pathname)}><Icon color='teal' name='newspaper outline'></Icon>References</Menu.Item></Link>
        <Link href="/rewards"><Menu.Item onClick={() => onClickMenu("Rewards", "star")} active={isActive("/rewards", router.pathname)}><Icon color='green' name='star'></Icon>Rewards</Menu.Item></Link>
        <Menu.Menu position='right'>
            <Link href={`/profiles/${id}?showNotifications=true`}><Menu.Item onClick={() => onClickMenu("My profile", "star")} active={isActive(`/profiles/${id}`, router.pathname)} position='right'><Icon color='red' name='bell'></Icon>Notifications<Label color='red' circular>
                2
            </Label></Menu.Item></Link>
            <Link href={`/profiles/${id}`}><Menu.Item onClick={() => onClickMenu("My profile", "star")} active={isActive(`/profiles/${id}`, router.pathname)} position='right'><Icon color='orange' name='user'></Icon>My profile</Menu.Item></Link>
            <Link href={`/signin`}><Menu.Item onClick={() => onClickMenu("", "sign in")} active={isActive(`signin`, router.pathname)} position='right'><Icon color='blue' name='sign in'></Icon></Menu.Item></Link>
        </Menu.Menu>
    </Menu>
}


const LoggedOutMenu = () => {
    const router = useRouter();

    const [currentMenu, setCurrentMenu] = useState(pathToTitle(router.pathname));
   
    const onClickMenu = (name, icon) => { setCurrentMenu(name);} // setCurrentIcon(icon); }

    return <Menu stackable inverted>
        <Menu.Menu position='right'>
            <Link href={`/signin`}><Menu.Item onClick={() => onClickMenu("", "sign in")} active={isActive(`signin`, router.pathname)} position='right'><Icon color='blue' name='sign in'></Icon></Menu.Item></Link>
        </Menu.Menu>
    </Menu>
}
const isActive = (state, target) => state.toLowerCase() === target.toLowerCase();

const pathToTitle = (path) => {
    if (path === '/')
        return "Dashboard"
    return path.slice(1);
}


function dateDifference(date1, date) {

}
export default Header;
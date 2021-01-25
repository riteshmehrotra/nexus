import React, { useState } from 'react';
import { Menu, Icon, Divider, Container } from 'semantic-ui-react';
import styles from './logostyle.module.css';
import Link from 'next/link'
import { useRouter } from 'next/router'


const Header = () => {
    const router = useRouter();
    const [currentMenu, setCurrentMenu] = useState(pathToTitle(router.pathname));
    const [currentIcon, setCurrentIcon] = useState("");
    const onClickMenu = (name, icon) => { setCurrentMenu(name); setCurrentIcon(icon); }
    return <div>
        <Menu stackable inverted>
            <Link href="/"><Menu.Item onClick={() => onClickMenu("Dashboard", "connectdevelop")} active={isActive("/", router.pathname)} ><h2><Icon color='orange' size='large' className={styles.Applogo} name='connectdevelop'></Icon>Nexus</h2></Menu.Item></Link>
            <Link href="/lab"><Menu.Item onClick={() => onClickMenu("Lab", "lab")} active={isActive("/lab", router.pathname)}><Icon color='yellow' name='lab'></Icon>Lab</Menu.Item></Link>
            {/* <Link href="/insights"><Menu.Item onClick={() => onClickMenu("Insights", "eye")} active={isActive("/insights", router.pathname)}><Icon color='red' name='eye'></Icon>Insights</Menu.Item></Link> */}
            {/* <Link href="/challenges"><Menu.Item active={isActive("/challenges", router.pathname)}><Icon color='green' name='chess board'></Icon>Challenges</Menu.Item></Link> */}
            <Link href="/forum"><Menu.Item onClick={() => onClickMenu("Forum", "question")} active={isActive("/forum", router.pathname)}><Icon color='blue' name='question'></Icon>Forum</Menu.Item></Link>
            <Link href="/recordings"><Menu.Item onClick={() => onClickMenu("#TechTalks Recordings", "record")} active={isActive("/recordings", router.pathname)}><Icon color='purple' name='record'></Icon>#TechTalks Recordings</Menu.Item></Link>
            <Link href="/events"><Menu.Item onClick={() => onClickMenu("Events", "calendar alternate outline")} active={isActive("/events", router.pathname)}><Icon color='olive' name='calendar alternate outline'></Icon>Events</Menu.Item></Link>
            <Link href="/references"><Menu.Item onClick={() => onClickMenu("References", "newspaper outline")} active={isActive("/references", router.pathname)}><Icon color='teal' name='newspaper outline'></Icon>References</Menu.Item></Link>
            <Link href="/badges"><Menu.Item onClick={() => onClickMenu("Badges", "star")} active={isActive("/badges", router.pathname)}><Icon color='green' name='star'></Icon>Badges</Menu.Item></Link>
            <Link href="/myactivities"><Menu.Item onClick={() => onClickMenu("My reputation", "star")} active={isActive("/myactivities", router.pathname)} position='right'><Icon color='orange' name='user'></Icon>My reputation</Menu.Item></Link>
        </Menu>
        <Divider hidden></Divider>
        <Container>
            {/* <h1><Icon name={currentIcon.icon}></Icon>{currentMenu.name}</h1> */}
            <Divider hidden></Divider>
        </Container>
    </div>
}

const isActive = (state, target) => state.toLowerCase() === target.toLowerCase();

const pathToTitle = (path) => {
    if (path === '/')
        return "Dashboard"
    return path.slice(1);
}

// const getLabelForRoute = (route)=>{
//     switch(route){
//         case "/":
//             {
//                 let route = routeLabelMap.find((item)=>item.path==="/")
//                 return {"name":route.label,"icon":route.icon};
//             }
            
//         default:
//             {
//                 let route = routeLabelMap.find((item)=>item.path==="/")
//                 return {"name":route.label,"icon":route.icon};
//             }
       
//     }
// }

// const routeLabelMap = [
//     {
//         path:"/",
//         label:"Dashboard",
//         icon:"connectdevelop"
//     }
// ]

export default Header;
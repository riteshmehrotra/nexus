import React from 'react';
import { Item } from 'semantic-ui-react';

const recordings = () => {
  return <Item.Group>
    <Item>
      <Item.Image src="/images/avatar/video_thumbnail.jpg"></Item.Image>
      <Item.Content>
        <Item.Header as='a'> Intro to SRE, Chaos and Gremlin</Item.Header>
        <Item.Meta>Speaker: Jason Yee</Item.Meta>
        <Item.Description>
          Are you interested in SRE and Chaos Engineering? What is it about?
          Gremlin is a platform that has been lead advocate for SRE and chaos engineering .

          Come Join us with JASON YEE, Director of Advocacy Gremlin Inc to learn more

          And have an interesting discussion with us.
        </Item.Description>
        <Item.Extra>Published on: Dec 12 2020</Item.Extra>
      </Item.Content>
    </Item>
    <Item>
      <Item.Image src="/images/avatar/video_thumbnail.jpg"></Item.Image>
      <Item.Content>
        <Item.Header as='a'>The age of micro-frontends</Item.Header>
        <Item.Meta>Speaker: Ritesh Mehrotra</Item.Meta>
        <Item.Description>
          <p>In recent years, we have done well to evolve from the big monolith, hard to change products, to developing small, independent, specific and highly scalable solutions in form of micro-services. Though one area, that hasn’t witnessed the revolution as yet in the front-end, plagued by complex, unstructured and hard to maintain implementations.</p>

          <p>Won’t it be nice if you could develop front-ends with SRP, and as highly decoupled independent features that can be plugged with any web app, be it an age-old monolith, a SPA or PWA? Ever wondered if you could readily combine the powers of Angular, React and Vue in one single application?</p>
        </Item.Description>
        <Item.Extra>Published on: Jul 01 2019 </Item.Extra>
      </Item.Content>
    </Item>

    
  </Item.Group>
}

export default recordings;
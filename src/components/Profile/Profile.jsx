import PropTypes from 'prop-types';
import { Container, Desctiption, Image, Name, Tag, Location, List, Item, Label, Quantity } from './Profile.styled';

export const Profile = ({username, tag, location, avatar, stats}) => {
   return <Container>
     <Desctiption>
       <Image
         src={avatar}
         alt="User avatar"
         width="160"
         height="160"
       />
       <Name>{username}</Name>
       <Tag>@{tag}</Tag>
       <Location>{location}</Location>
     </Desctiption>
   
     <List>
       <Item>
         <Label>Followers</Label>
         <Quantity>{stats.followers}</Quantity>
       </Item>
       <Item>
         <Label>Views</Label>
         <Quantity>{stats.views}</Quantity>
       </Item>
       <Item>
         <Label>Likes</Label>
         <Quantity>{stats.likes}</Quantity>
       </Item>
     </List>
   </Container>
   }
   
   Profile.propType = {
      username: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      stats:PropTypes.exact({
         followers: PropTypes.number.isRequired,
         views: PropTypes.number.isRequired,
         likes: PropTypes.number.isRequired,
      })
   };

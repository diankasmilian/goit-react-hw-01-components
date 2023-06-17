import PropTypes from 'prop-types';
import { BsFillCircleFill } from "react-icons/bs";

import { Item, Name} from './FriendListItem.styled';
export const FriendListItem = ({avatar, name, isOnline}) => {
   return <Item isOnline={isOnline}>
   <BsFillCircleFill></BsFillCircleFill>
   <img src={avatar} alt="User avatar" width="48" />
   <Name>{name}</Name>
 </Item>
}

FriendListItem.propTypes = {
   avatar: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   isOnline: PropTypes.bool.isRequired,
}
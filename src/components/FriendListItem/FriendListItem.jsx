import PropTypes from 'prop-types';
import {
  Item,
  Status,
  AvatarCover,
  Avatar,
  FriendName,
} from './FriendListItem.styled';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <Item>
      <Status isOnline={isOnline} />

      <AvatarCover>
        <Avatar src={avatar} alt="User avatar" width="48" />
      </AvatarCover>
      <FriendName>{name}</FriendName>
    </Item>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;

import PropTypes from 'prop-types';
import FriendListItem from 'components/FriendListItem/FriendListItem';
import css from './FriendList.module.css';
import { ContainerFriend } from './ FriendList.styled';

function FriendList({ friends }) {
  return (
    <ContainerFriend>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ContainerFriend>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;

import PropTypes from 'prop-types';
import css from './Profile.module.css';
import {
  Container,
  Description,
  Avatar,
  AvatarCover,
  Location,
  Name,
  Tag,
  Stats,
  StatItem,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => {
  return (
    <Container>
      <Description>
        <AvatarCover>
          <img src={avatar} alt="User avatar" className={css.avatar} />
        </AvatarCover>
        <Name>{username}</Name>
        <Tag>&#64;{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <StatItem>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </StatItem>
        <StatItem className={css.item}>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </StatItem>
        <StatItem className={css.item}>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </StatItem>
      </Stats>
    </Container>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

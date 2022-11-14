import styled from 'styled-components';

export const Item = styled.li`
  padding: 10px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  border-radius: 4px;
  background-color: var(--color-white);
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgba(248, 197, 197, 0.2);
`;

export const Status = styled.span`
  width: 20px;
  min-width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;
export const AvatarCover = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 6px;
  overflow: hidden;
`;
export const Avatar = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;
export const FriendName = styled.p`
  color: var(--title-text-color);
  font-weight: 500;
  font-size: 26px;
  line-height: 1.6;
  text-align: center;
  letter-spacing: 0.03em;
`;

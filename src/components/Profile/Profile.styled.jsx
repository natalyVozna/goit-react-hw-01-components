import styled from 'styled-components';

export const Container = styled.div`
  min-width: 350px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  background-color: ${props => props.theme.colors.white};
  overflow: hidden;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);

  transition: box-shadow 250ms ${props => props.theme.colors.timingFunction};

  &:hover {
    box-shadow: 0px 0px 10px 1px rgba(33, 148, 242, 0.3);
  }
`;
export const Description = styled.div`
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const AvatarCover = styled.div`
  width: 160px;
  min-width: 160px;
  height: 160px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0px 0px 6px 1px rgba(33, 148, 242, 0.3);
  transition: transform 250ms ${props => props.theme.colors.timingFunction},
    box-shadow 250ms ${props => props.theme.colors.timingFunction};
  margin-bottom: 26px;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 10px 1px rgba(33, 148, 242, 0.3);
  }
`;
export const Avatar = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

export const Location = styled.p`
  color: ${props => props.theme.colors.text};
  font-weight: 700;
  font-size: 26px;
  line-height: 1.6;
  text-align: center;
  letter-spacing: 0.03em;
`;
export const Name = styled(Location)`
  margin-bottom: 10px;
`;

export const Text = styled.p`
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;
  text-align: center;
  letter-spacing: 0.03em;
  color: ${props => props.theme.colors.timingFunction};
`;

export const Tag = styled(Location)`
  margin-bottom: 6px;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const StatItem = styled.li`
  width: calc(100% / 3);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 26px 10px;
  background-color: rgba(33, 148, 242, 0.3);
  border-top: ${props => `1px solid ${props.theme.colors.gray}
`};

  &:not(:last-child) {
    border-right: ${props => `1px solid ${props.theme.colors.gray}`};
  }
`;
export const Label = styled.span`
  // color: var(--title-text-color);
  color: ${props => props.theme.colors.text};
  font-weight: 700;
  font-size: 16px;
  line-height: 1.6;
  text-align: center;
  letter-spacing: 0.03em;
`;
export const Quantity = styled(Label)`
  font-size: 20px;
`;

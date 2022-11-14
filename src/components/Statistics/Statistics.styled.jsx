import styled from 'styled-components';
import { getRandomHexColor } from 'utils';

export const Container = styled.section`
  min-width: 400px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  overflow: hidden;
  border-radius: 4px;
  background-color: var(--color-white);
  transition: box-shadow 250ms var(--timing-function);
`;
export const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  width: 100%;
  padding: 30px 0;
  color: var(--title-text-color);
  font-weight: 700;
  font-size: 26px;
  line-height: 1.6;
  text-align: center;
  letter-spacing: 0.03em;
`;
export const StatList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 110px;
  padding: 16px 10px;
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.3);
  color: var(--color-white);
  background-color: ${getRandomHexColor()};
`;
export const Label = styled.span`
  font-size: 20px;
  font-weight: 500;
  line-height: 1.5;
  text-align: center;
  letter-spacing: 0.03em;
`;
export const Percentage = styled.span`
  font-size: 26px;
  font-weight: 600;
  line-height: 1.7;
  text-align: center;
  letter-spacing: 0.03em;
`;

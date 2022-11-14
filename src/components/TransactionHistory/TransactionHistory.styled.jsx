import styled from 'styled-components';

export const Container = styled.table`
  overflow: hidden;
  width: 800px;
  border-radius: 4px;
  border-collapse: collapse;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.6;
  text-align: center;
  letter-spacing: 0.03em;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
`;
export const Head = styled.th`
  padding: 8px;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--color-white);
  background-color: var(--accent-color);

  &:not(:last-child) {
    border-right: 1px solid var(--color-white);
  }
`;

export const Cell = styled.td`
  padding: 8px;
  color: #6a6c72;
  font-size: 18px;

  &:not(:last-child) {
    border-right: 1px solid var(--gray-color);
  }
`;
export const Body = styled.tbody`
  tr:nth-child(2n) {
    background-color: #d8ddf0;
  }
`;

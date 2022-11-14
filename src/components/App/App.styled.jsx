import styled from 'styled-components';

export const Container = styled.div`
font-family: ${p => p.theme.fonts.body}
  padding: 40px;
  height: 100%;
  display: flex;
  gap: 60px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 26px;
`;

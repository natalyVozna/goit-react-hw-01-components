import styled from 'styled-components';

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${p => p.theme.space[2]}px;
  margin: ${p => p.theme.space[0]}px;
  padding: ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.radii.normal};
  color: ${p => p.theme.colors.white};
  background-color: ${p =>
    p.disabled ? p.theme.colors.white : p.theme.colors.accent};

  :hover:not(:disabled) {
    background-color: ${p => p.theme.colors.praimeryText};
  }
`;

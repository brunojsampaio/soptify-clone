import styled, { keyframes } from 'styled-components';

const ratate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.img`
  animation: ${ratate360} 2s linear infinite;
`;

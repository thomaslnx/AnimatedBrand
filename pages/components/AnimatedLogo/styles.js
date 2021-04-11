import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  padding-top: 10px;
  background: rgba(185, 38, 38, 0.54);
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const FrontM = styled.svg`
position: relative;

z-index: 1;

path {
  stroke-dasharray: 4232;
  animation: stroke-dash 12s linear forwards infinite;
  stroke-dashoffset: 4232;
  }

  @keyframes stroke-dash{
    to {
      stroke-dashoffset: 0;
    }
    from {
      stroke-dashoffset: 4232;
    }
  }
`;

export const BackM = styled.svg`
position: absolute;
z-index: 0;

width: 673px;
height: 407px;

path {
  stroke-dasharray: 4232;
  animation: stroke-dash 12s linear forwards infinite;
  stroke-dashoffset: 4232;
  }

  @keyframes stroke-dash{
    to {
      stroke-dashoffset: 0;
    }
    from {
      stroke-dashoffset: 4232;
    }
  }
`;
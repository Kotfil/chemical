'use client';
import styled from 'styled-components';

export const LogoWrapper = styled.div`
  width: clamp(50px, 8vw, 120px);
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
    border-radius: 12px;
  }
`;

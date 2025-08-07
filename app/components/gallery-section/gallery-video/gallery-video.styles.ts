'use client';

import styled from 'styled-components';

export const VideoGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  padding: 24px;
`;

export const VideoWrapper = styled.div`
  width: 100%;

  video {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 8px;
    background-color: black;
  }
`;

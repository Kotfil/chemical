"use client";
import styled from "styled-components";
import Image from "next/image";

export const Grid = styled.div`
  display: grid;
  width: 100%;
  padding: 0 16px;
  margin: 0 auto;
  gap: 8px;

  /* 5 колонок по умолчанию */
  grid-template-columns: repeat(5, 1fr);

  @media (max-width: 599px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 360px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Flag = styled.img`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  object-fit: contain;
`;

export const ScrollContainer = styled.div`
  max-height: 60vh;
  overflow-y: auto;
  padding-right: 4px;

  @media (min-width: 600px) {
    max-height: none;
    overflow-y: visible;
    padding-right: 0;
  }
`;

export const FlexWrapGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;

  & > * {
    flex: 0 0 calc(10% - 8px); // 10 кнопок в ряд, с учётом gap
    max-width: calc(10% - 8px);
  }

  @media (max-width: 1024px) {
    & > * {
      flex: 0 0 calc(20% - 8px); // 5 в ряд
    }
  }

  @media (max-width: 600px) {
    & > * {
      flex: 0 0 calc(33.333% - 8px); // 3 в ряд
    }
  }

  @media (max-width: 400px) {
    & > * {
      flex: 0 0 calc(50% - 8px); // 2 в ряд
    }
  }
`;

export const FlexWrapGrid2 = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
`;

'use client';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: inline-block;
  text-align: center;

  span {
    /* Стили по умолчанию (до 1200px) */
    display: inline !important;
    vertical-align: top !important;
    line-height: 1 !important;
    word-break: break-word !important;
    white-space: normal !important;
    margin: 0 !important;
    padding: 0 !important;
    font-size: 130% !important;
  }

  /* Стили для экранов шире 1200px */
  @media (min-width: 1200px) {
    span {
      margin: initial !important;
      padding: initial !important;
      line-height: normal !important;
      vertical-align: baseline !important;
    }
  }
`;

// 'use client';
// import styled from 'styled-components';
//
// export const Wrapper = styled.div`
//   display: inline-block;
//   text-align: center;
//   font-family: 'blogger';
//   span {
//     display: inline !important;
//     vertical-align: top !important;
//     line-height: 1 !important;
//     word-break: break-word !important;
//     white-space: normal !important;
//     margin: 0 !important;
//     padding: 0 !important;
//   }
// `;

// 'use client';
// import styled from 'styled-components';
//
// export const Wrapper = styled.div`
//   display: inline-block;
//   text-align: center;
//
//   span {
//     /* стили по умолчанию (320px до 900px) */
//     display: inline !important;
//     vertical-align: top !important;
//     line-height: 1 !important;
//     word-break: break-word !important;
//     white-space: normal !important;
//     margin: 0 !important;
//     padding: 0 !important;
//
//     /* для экранов шире 900px */
//     @media (min-width: 901px) {
//       /* тут свои стили для больших экранов */
//       margin: initial !important;
//       padding: initial !important;
//       /* если надо, можно вернуть line-height, vertical-align и др. */
//       line-height: normal !important;
//       vertical-align: baseline !important;
//     }
//   }
// `;

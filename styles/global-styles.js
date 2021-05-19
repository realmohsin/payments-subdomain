import { css, Global, keyframes } from '@emotion/react'
// import styled from '@emotion/styled'

const GlobalStyles = () => (
  <Global
    styles={css`
      *,
      *::before,
      *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      html {
        font-size: 62.5%;
        @media (max-width: 1280px) {
        }
        @media (max-width: 960px) {
        }
        @media (max-width: 600px) {
        }
      }
      body {
        font-size: 1.6rem;
        font-family: 'Noto Sans JP', sans-serif;
        line-height: 1.6;
      }
      a {
        display: block;
        text-decoration: none;
        color: inherit;
      }
      img {
        display: block;
      }
      input,
      button,
      textarea,
      select {
        display: block;
        font: inherit;
      }
      a,
      button {
        cursor: pointer;
      }
      ul {
        list-style: none;
      }
      ::selection {
        background-color: black;
        color: white;
      }
      .row {
        position: relative;
        width: 100%;
      }
      .row [class^='col'] {
        float: left;
        margin: 0.5rem 2%;
        min-height: 0.125rem;
      }
      .col-1,
      .col-2,
      .col-3,
      .col-4,
      .col-5,
      .col-6,
      .col-7,
      .col-8,
      .col-9,
      .col-10,
      .col-11,
      .col-12 {
        width: 96%;
      }
      .col-1-sm {
        width: 4.33%;
      }
      .col-2-sm {
        width: 12.66%;
      }
      .col-3-sm {
        width: 21%;
      }
      .col-4-sm {
        width: 29.33%;
      }
      .col-5-sm {
        width: 37.66%;
      }
      .col-6-sm {
        width: 46%;
      }
      .col-7-sm {
        width: 54.33%;
      }
      .col-8-sm {
        width: 62.66%;
      }
      .col-9-sm {
        width: 71%;
      }
      .col-10-sm {
        width: 79.33%;
      }
      .col-11-sm {
        width: 87.66%;
      }
      .col-12-sm {
        width: 96%;
      }
      .row::after {
        content: '';
        display: table;
        clear: both;
      }
      .hidden-sm {
        display: none;
      }
      @media only screen and (min-width: 33.75em) {
        /* 540px */
        .container {
          width: 80%;
        }
      }
      @media only screen and (min-width: 45em) {
        /* 720px */
        .col-1 {
          width: 4.33%;
        }
        .col-2 {
          width: 12.66%;
        }
        .col-3 {
          width: 21%;
        }
        .col-4 {
          width: 29.33%;
        }
        .col-5 {
          width: 37.66%;
        }
        .col-6 {
          width: 46%;
        }
        .col-7 {
          width: 54.33%;
        }
        .col-8 {
          width: 62.66%;
        }
        .col-9 {
          width: 71%;
        }
        .col-10 {
          width: 79.33%;
        }
        .col-11 {
          width: 87.66%;
        }
        .col-12 {
          width: 96%;
        }
        .hidden-sm {
          display: block;
        }
      }
    `}
  />
)

export default GlobalStyles

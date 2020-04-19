import App from 'next/app';
import React from 'react';
import {ThemeProvider} from 'styled-components';

import './style.css';
import 'sanitize.css';
import 'sanitize.css/typography.css';
import 'sanitize.css/forms.css';

const theme = {
  colors: {
    primary: {
      Red: 'hsl(0, 78%, 62%)',
      Cyan: 'hsl(180, 62%, 55%)',
      Orange: 'hsl(34, 97%, 64%)',
      Blue: 'hsl(212, 86%, 64%)',
    },
    neutral: {
      VeryDarkBlue: 'hsl(234, 12%, 34%)',
      GrayishBlue: 'hsl(229, 6%, 66%)',
      VeryLightGray: 'hsl(0, 0%, 98%)',
    },
  },
};

export default class MyApp extends App {
  render() {
    const {Component, pageProps} = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

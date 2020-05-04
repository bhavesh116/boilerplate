import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import { RootRoutes } from './routes';

import theme from './theme/theme.json';
import store from './redux';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0px;
  padding: 0px;
`;

const Root = () => (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Wrapper>
          <RootRoutes />
        </Wrapper>
      </ThemeProvider>
    </Provider>
);

render(
  <Root store={store} />,
  document.querySelector('.root'),
);

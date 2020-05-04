import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Route, Switch, withRouter } from 'react-router-dom';
import BlogsList from './BlogsList'

const BlogsBlogsWrapper = styled.div`
  height: 100%;
  width: 100%
`;

const Blogs = props => {
 console.log('blogs')
  const {
    match: {
      path,
    },
  } = props;

  return (
    <BlogsBlogsWrapper>
      <Switch>
        <Route
          path={path}
          component={BlogsList}
        />
        {/* <Route
          exact 
          path={`${path}/:blogId`}
          component={BlogsList}
        /> */}
      </Switch>
    </BlogsBlogsWrapper>
  );
};

export default withRouter(Blogs);

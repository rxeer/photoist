import React from 'react';

import notFoundImage from '../assets/images/not-found.svg';
import Layout from '../components/Layout';

const NotFoundPage: React.FC = (): React.ReactElement => (
  <Layout>
    <article className="container box style3">
      <div className="not-found">
        <img className="not-found-image" src={notFoundImage} />
        <header>
          <h2>404 - NOT FOUND</h2>
        </header>
        <p>Not a valid URL</p>
      </div>
    </article>
  </Layout>
);

export default NotFoundPage;

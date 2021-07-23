import React from 'react';
import SimpleReactLightbox from 'simple-react-lightbox';

import Layout from '@components/Layout';
import Gallery from '@components/Gallery';

const img_set = [
  {
    src: require('../assets/images/fulls/03.jpeg'),
    thumbnail: require('../assets/images/thumbs/03.jpg'),
    title: 'Any time ',
    description: 'Be one with the time',
  },
  {
    src: require('../assets/images/fulls/04.jpeg'),
    thumbnail: require('../assets/images/thumbs/04.jpg'),
    title: 'Any source of light',
    description: 'Be one with the light',
  },
  {
    src: require('../assets/images/fulls/06.jpeg'),
    thumbnail: require('../assets/images/thumbs/06.jpg'),
    title: 'Any source of enlightenment',
    description: 'Be one with the soul',
  },
  {
    src: require('../assets/images/fulls/08.jpeg'),
    thumbnail: require('../assets/images/thumbs/08.jpg'),
    title: 'Give away',
    description: 'Be one with the empathy',
  },
  {
    src: require('../assets/images/fulls/09.jpg'),
    thumbnail: require('../assets/images/thumbs/09.jpg'),
    title: 'Moment',
    description: 'Be one with the moment',
  },
  {
    src: require('../assets/images/fulls/10.jpg'),
    thumbnail: require('../assets/images/thumbs/10.jpg'),
    title: 'Serenity',
    description: 'Be one with the purity',
  },
  {
    src: require('../assets/images/fulls/11.jpg'),
    thumbnail: require('../assets/images/thumbs/11.jpg'),
    title: 'Conscious',
    description: 'Be one with the self',
  },
  {
    src: require('../assets/images/fulls/12.jpg'),
    thumbnail: require('../assets/images/thumbs/12.jpg'),
    title: 'Nature',
    description: 'Be one with the nature',
  },
];

const IndexPage: React.FC = () => (
  <Layout>
    <SimpleReactLightbox>
      <Gallery images={img_set} />
    </SimpleReactLightbox>
  </Layout>
);

export default IndexPage;

import React from 'react';
import { SRLWrapper } from 'simple-react-lightbox';

interface IProps {
  images: Array<{
    src: any;
    thumbnail: any;
    description: string;
    title: string;
  }>;
}

const Gallery: React.FC<IProps> = ({ images }) => (
  <SRLWrapper>
    <div className="photo-list">
      {images.map(image => {
        return (
          <article
            className="thumb"
            data-sal="fade"
            data-sal-delay="600"
            data-sal-easing="ease"
            key={image.src.default}
          >
            <span
              style={{
                cursor: 'pointer',
                outline: '0px',
              }}
              className="image"
            >
              <img src={image.src.default} alt="" title={image.title} />
            </span>
            <h2>{image.title}</h2>
            <p>{image.description}</p>
          </article>
        );
      })}
    </div>
  </SRLWrapper>
);

export default Gallery;

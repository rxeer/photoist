import React from 'react';
import { SRLWrapper } from 'simple-react-lightbox';

export default function Gallery({ images }) {
  return (
    <SRLWrapper>
      <div className="photo-list">
        {images.map(image => {
          return (
            <article className="thumb" key={image.src.default}>
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
              <p>{image.desc}</p>
            </article>
          );
        })}
      </div>
    </SRLWrapper>
  );
}

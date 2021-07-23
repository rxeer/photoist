import React, { useState, useCallback, useEffect } from 'react';
import firebase from 'gatsby-plugin-firebase';
import { nanoid } from 'nanoid';
import classNames from 'classnames';
import disableScroll from 'disable-scroll';

import SubmitForm from './SubmitForm';
import config from '../../config';

interface IProps {
  isVisible: boolean;
  onClose: () => void;
}

const Footer: React.FC<IProps> = ({ onClose, isVisible }) => {
  const [values, setValues] = useState({});
  const [isSubmitted, setSubmitted] = useState(false);

  const getCurrentSubmissions = useCallback(async () => {
    firebase
      .database()
      .ref('/submissions')
      .get()
      .then(snapshot => {
        setValues(snapshot.val());
      });
  }, [setValues]);

  const handleFormSubmit = useCallback(
    async (data: { name: string; email: string; message: string }) => {
      if (data) {
        const uniqueId = nanoid();

        const submissionsData = {
          ...values,
          [uniqueId]: data,
        };

        try {
          await firebase.database().ref('/submissions').set(submissionsData);
          setSubmitted(true);
        } catch (e) {
          console.error(e);
        }
      }
    },
    [setSubmitted, values]
  );

  useEffect(() => {
    if (!firebase) {
      return;
    }
    getCurrentSubmissions();
  }, [getCurrentSubmissions]);

  const handleClose = event => {
    event.preventDefault();
    onClose();
    disableScroll.off();
  };

  return (
    <footer
      id="footer"
      className={classNames({
        panel: true,
        active: isVisible,
      })}
    >
      <div className="inner split">
        <div>
          <section>
            <h2>More about me</h2>
            <p>
              Full time Web Developer. <br />
              Part of time photo and video maker. <br />
              Love to travel, create electronic music and shit.
            </p>
          </section>
          <section>
            <h2>Follow me on ...</h2>
            <ul className="icons">
              {config.socialLinks.map(social => {
                const { icon, name, url } = social;
                return (
                  <li key={url}>
                    <a href={url} className={`icon ${icon}`}>
                      <span className="label">{name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
        <div>
          <section>
            <h2>Get in touch</h2>
            <SubmitForm isSubmitted={isSubmitted} onSubmit={handleFormSubmit} />
          </section>
        </div>
      </div>
      <div className="closer" onClick={handleClose} />
    </footer>
  );
};

export default Footer;

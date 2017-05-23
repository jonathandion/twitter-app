// @flow

import React from 'react';
import './Hero.style.css';

const Hero = ({user, tweets}: {user: string, tweets: Array<Object>}) => {
  const profileBanner = getUserProfileBanner(tweets);
  const profilUrl = `https://twitter.com/${user}`;

  function getUserProfileBanner(tweets: Array<Object>) {
    let profile_banner_url = '';
    if (tweets.length) {
      profile_banner_url = tweets[0].user.profile_banner_url;
    }
    return profile_banner_url;
  }

  return (
    <div
      className="Hero"
      style={{
        backgroundImage: `url(${profileBanner})`,
      }}
    >
      <div className="o-container">
        <div className="Hero__content">
          <h1 className="Hero__title">
            <a href={profilUrl} target="_blank" rel="noopener noreferrer">
              @{user}
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React, { useRef, useEffect, useState } from 'react';
import videojs from 'video.js';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Button, Row, Col } from 'react-bootstrap';
import './style.scss';
// components
import VideoJS from '../../components/VideoJS';
import InformationMovie from '../../components/InformationMovie';
import CommentSection from '../../components/CommentSection';
import Rating from '../../components/Rating';
import MovieList from '../../components/Movie/MovieList';
import { movieActions } from '../../redux-toolkit/slice/movie';
import convertToUrl from '../../utils/convertToUrl';
import poster from '../../assets/photos/logo.svg';

Watch.propTypes = {};

function Watch(props) {
  const playerRef = useRef(null);
  const currentEpisode = useSelector((state) => state.movie.currentEpisode);
  const [currentSource, setCurrentSource] = useState('');
  const dispatch = useDispatch();
  const location = useLocation();
  const currentMovie = useSelector((state) => state.movie.currentMovie);
  const [serverVideo, setServerVideo] = useState('local');

  useEffect(() => {
    currentMovie?.episodes.map((episode) => {
      if (episode.name_URL === location.pathname.split('/')[3]) {
        dispatch(movieActions.updateCurrentEpisode(episode));
        return;
      }
    });
  }, [location.pathname.split('/')[3], currentMovie]);

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on('waiting', () => {
      videojs.log('player is waiting');
    });

    // player.on('dispose', () => {
    //   videojs.log('player will dispose');
    // });
  };

  // useEffect(() => {
  //   currentMovie?.sources?.map((source) => {
  //     if (source.server === serverVideo) setCurrentSource(source.src);
  //   });
  // }, [serverVideo]);

  const handleChangeEpisode = (e) => {
    currentMovie.episodes.map((episode) => {
      if (episode.name === e.target.innerText) {
        dispatch(movieActions.updateView(currentMovie._id));
        window.scrollTo(0, 0);
      }
    });
  };
  return (
    <>
      {/* watch movie section  */}
      <div className="player">
        <Container style={{ backgroundColor: '#000' }}>
          {/* player */}
          {serverVideo === 'local' ? (
            <VideoJS
              options={{
                autoplay: false,
                controls: true,
                responsive: true,
                fluid: true,
                playbackRates: [0.5, 1, 1.5, 2],
                controlBar: {
                  subsCapsButton: true,
                },
                poster: poster,
                sources: [
                  {
                    src: currentEpisode ? currentEpisode.sources[0].src : '',
                    type: 'video/mp4',
                  },
                ],
              }}
              onReady={handlePlayerReady}
            />
          ) : serverVideo === 'abyss' ? (
            <iframe
              title="video abyss"
              width="100%"
              height="600"
              src={currentEpisode ? currentEpisode.sources[1].src : ''}
              frameborder="0"
              scrolling="0"
              allowfullscreen
            ></iframe>
          ) : serverVideo === 'mega' ? (
            <iframe
              title="video mega"
              width="100%"
              height="600"
              frameborder="0"
              src={currentEpisode ? currentEpisode.sources[3].src : ''}
              allowfullscreen
            ></iframe>
          ) : serverVideo === 'ok' ? (
            <iframe
              title="video ok"
              width="100%"
              height="600"
              src="//ok.ru/videoembed/5065806514897"
              frameborder="0"
              allow="autoplay"
              allowfullscreen
            ></iframe>
          ) : (
            <></>
          )}
          {/* section change server video */}
          <div className="servers" style={{ display: 'flex', 'justify-content': 'center' }}>
            <Button
              type="button"
              variant="info"
              onClick={() => setServerVideo('local')}
              className={`change-server  ${serverVideo === 'local' ? 'disabled' : ''} `}
            >
              Server local
            </Button>
            <Button
              variant="info"
              onClick={() => setServerVideo('abyss')}
              className={`change-server  ${serverVideo === 'abyss' ? 'disabled' : ''} `}
            >
              Server abyss
            </Button>
            <Button
              variant="info"
              onClick={() => setServerVideo('mega')}
              className={`change-server  ${serverVideo === 'mega' ? 'disabled' : ''} `}
            >
              Server mega
            </Button>
            <Button
              variant="info"
              onClick={() => setServerVideo('ok')}
              className={`change-server  ${serverVideo === 'ok' ? 'disabled' : ''} `}
            >
              Server ok
            </Button>
          </div>
          {/* movie summary */}
          <InformationMovie type="summary" />
          {/* {infomationMovie ? (
            <div className="summary">
              <h2 className="summary__name">{infomationMovie.name}</h2>
              <h4 className="summary__othername">
                {infomationMovie.other_name}({infomationMovie.year})
              </h4>
            </div>
          ) : (
            <></>
          )}

          <Rating /> */}
          {/* episode section */}
          <div className="episode-section">
            <div className="episode-section-title">
              <h3 className="title">Tập phim</h3>
            </div>
            <ul className="list-movie-episodes">
              {currentMovie?.episodes?.map((item, index) => (
                <li className={'movie-episode '} key={index}>
                  <Link
                    onClick={handleChangeEpisode}
                    to={`/xem-phim/${currentMovie.name_URL}/` + convertToUrl(item.name)}
                  >
                    {' '}
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* nominations section */}
          <div className="nominations">
            <div className="container">
              <MovieList
                movieListTitle="Phim liên quan"
                query={{
                  // genres: infomationMovie?.genres[0]._id,
                  _page: '1',
                  _limit: '12',
                }}
              />
            </div>
          </div>
          {/* Comment section */}
          <CommentSection />
        </Container>
      </div>
    </>
  );
}

export default Watch;

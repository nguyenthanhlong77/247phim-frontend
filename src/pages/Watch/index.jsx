import React, { useRef, useEffect } from 'react';
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
  const dispatch = useDispatch();
  const location = useLocation();
  const infomationMovie = useSelector((state) => state.movie.infoMovieSelected);

  useEffect(() => {
    // update current movie
    const movieURL = location.pathname.split('/')[2];
    dispatch(movieActions.isSelecting(movieURL));
    dispatch(movieActions.updateCurentEpisodeSuccess(undefined));
  }, [location.pathname.split('/')[2]]);

  const videoOptions = {
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
        src: 'http://localhost:4000/videos/video__1655945327900.mp4',
        type: 'video/mp4',
      },
    ],
  };

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
  const handleChangeEpisode = (e) => {
    infomationMovie.episodes.map((episode) => {
      if (episode.name === e.target.innerText) {
        dispatch(movieActions.updateView(infomationMovie._id));
        dispatch(movieActions.updateCurentEpisodeSuccess(episode));
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
          <VideoJS options={videoOptions} onReady={handlePlayerReady} />
          {/* section change server video */}
          <div className="servers" style={{ display: 'flex', 'justify-content': 'center' }}>
            <Button type="button" disabled variant="info" className="change-server">
              Server 1
            </Button>
            <Button variant="info" className="change-server">
              Server abyss
            </Button>
            <Button variant="info" className="change-server">
              Server mega
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
              {infomationMovie?.episodes?.map((item, index) => (
                <li className={'movie-episode '} key={index}>
                  <Link
                    onClick={handleChangeEpisode}
                    to={`/xem-phim/${infomationMovie.name_URL}/` + convertToUrl(item.name)}
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
                  genres: infomationMovie?.genres[0]._id,
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

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import publicApi from '../../api/publicApi';
import PlayerSection from './components/PlayerSection';
import CommentSection from './components/CommentSection';
import { movieActions } from '../../redux-toolkit/slice/movie';

import MovieList from '../../components/Movie/MovieList';

function Movie(props) {
  const dispatch = useDispatch();
  const [isChange, setIsChange] = useState(false);
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    // update current movie
    const movieURL = location.pathname.split('/')[2];
    dispatch(movieActions.isSelecting(movieURL));
    dispatch(movieActions.updateCurentEpisodeSuccess(undefined));
  }, [location.pathname.split('/')[2]]);

  return (
    <div style={{ color: '#e5e5e5' }}>
      <PlayerSection />

      <div className="nominations">
        <div className="container">
          <MovieList
            movieListTitle="Phim gợi ý"
            query={{
              _page: '1',
              _limit: '6',
            }}
          />
        </div>
      </div>
      <CommentSection />
    </div>
  );
}

export default Movie;

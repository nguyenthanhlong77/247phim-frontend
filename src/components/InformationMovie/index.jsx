import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BsFillEyeFill, BsFillHandThumbsUpFill, BsFillPlayFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import userApi from '../../api/userApi';
import { authActions } from '../../redux-toolkit/slice/auth';
import { movieActions } from '../../redux-toolkit/slice/movie';
import convertToUrl from '../../utils/convertToUrl';
import Rating from '../Rating';

import './style.scss';

function InformationMovie(props) {
  const [typeLike, setTypeLike] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const infomationMovie = useSelector((state) => state.movie.infoMovieSelected);

  const countries = useSelector((state) => state.public.countries);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const movieID = useSelector((state) => state.movie._id);
  const currentUser = useSelector((state) => state.auth.currentUser);

  const handlePlay = () => {
    dispatch(movieActions.updateView(infomationMovie._id));
    navigate(
      `/xem-phim/${infomationMovie.name_URL}/${convertToUrl(infomationMovie.episodes[0].name)}`
    );
  };

  useEffect(() => {
    if (currentUser && movieID) {
      let newTypeLike = true;
      currentUser.like_movies.map((movie) => {
        if (movie === movieID) newTypeLike = false;
      });
      setTypeLike(newTypeLike);
    }
  }, [movieID, currentUser]);

  const handleLikeMovie = async () => {
    if (isLoggedIn) {
      await userApi.updateNewLikeMovie({ type_like: typeLike, movieID: movieID });
      dispatch(authActions.reloadData());
      dispatch(movieActions.reloadData(movieID));
    }
    if (!isLoggedIn) {
      alert('Bạn chưa đăng nhập. Vui lòng đăng nhập trước');
      navigate('/dang-nhap');
    }
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

  const section = infomationMovie ? (
    props.type === 'full' ? (
      <div className="information-section">
        <Container>
          <Row className="movie-detail mt-3">
            <Col md={4} xs={12} className=" movie-detail-left">
              <img
                className="movie-image"
                src={infomationMovie.URL_image}
                alt={infomationMovie.name}
              />
            </Col>
            <Col md={8} xs={12} className="movie-detail-right">
              <div className="movie-detail-info">
                <h2 className="movie-name">{infomationMovie.name}</h2>
                <h4 className="movie-other_name">
                  {infomationMovie.other_name} ({infomationMovie.year})
                </h4>
                <div className="detail-info-popular row">
                  <div className="detail-info-view col-md-2 col-6">
                    <BsFillEyeFill className="icon" />
                    <span>{infomationMovie.views}</span>
                  </div>
                  <div className="detail-info-view col-md-2 col-6">
                    <BsFillHandThumbsUpFill className="icon" />
                    <span>{infomationMovie.likes}</span>
                  </div>
                </div>
              </div>

              <Row className="">
                <Col xs={6} md={3} className="">
                  <button className="bth-play" onClick={handlePlay}>
                    <BsFillPlayFill className="icon-play" />
                    PLAY
                  </button>
                </Col>
              </Row>

              <div className="movie-des">
                <p>{infomationMovie.description}</p>
              </div>
              <Row className="">
                <Col xs={12} md={6} className="">
                  <ul className="more-info">
                    <li>
                      <span>Thời lượng:</span> {infomationMovie.duration} phút
                    </li>
                    <li>
                      <span>Đạo diễn:</span> {infomationMovie.director}
                    </li>
                    <li>
                      <span>Quốc gia:</span>{' '}
                      {countries?.map((country) =>
                        country._id === infomationMovie.country ? country.name : ''
                      )}
                    </li>
                    <li>
                      <span>Thể loại:</span>
                      {infomationMovie.genres.map((item) => `${item.name}, `)}
                    </li>
                    <li>
                      <span>Năm phát hành:</span> {infomationMovie.year}
                    </li>
                    <li>
                      <span>Diễn viên:</span> {infomationMovie.casts}
                    </li>
                  </ul>
                </Col>
              </Row>
              <Row className="liking-movie ">
                <Col xs={12} md={3}>
                  <button onClick={handleLikeMovie}>{typeLike ? 'Like' : 'Unlike'}</button>
                </Col>
                <Col xs={12} md={9}>
                  <Rating amount={infomationMovie.rate.amount} total={infomationMovie.rate.total} />
                </Col>
              </Row>
            </Col>
          </Row>

          <div className="episode-section">
            <div className="episode-section-title">
              <h3>Tập phim</h3>
            </div>
            <ul className="list-movie-episodes">
              {infomationMovie.episodes?.map((item, index) => (
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
        </Container>
      </div>
    ) : (
      <div className="information-section">
        <Container>
          <Row className="movie-detail mt-3">
            <div className="movie-detail-right">
              <div className="movie-detail-info">
                <h2 className="movie-name">{infomationMovie.name}</h2>
                <h4 className="movie-other_name">
                  {infomationMovie.other_name} ({infomationMovie.year})
                </h4>
                <div className="detail-info-popular row">
                  <div className="detail-info-view col-md-2 col-6">
                    <BsFillEyeFill className="icon" />
                    <span>{infomationMovie.views}</span>
                  </div>
                  <div className="detail-info-view col-md-2 col-6">
                    <BsFillHandThumbsUpFill className="icon" />
                    <span>{infomationMovie.likes}</span>
                  </div>
                </div>
              </div>

              <div className="movie-des">
                <p>{infomationMovie.description}</p>
              </div>

              <Row className="liking-movie ">
                <Col xs={12} md={3}>
                  <button onClick={handleLikeMovie}>{typeLike ? 'Like' : 'Unlike'}</button>
                </Col>
                <Col xs={12} md={9}>
                  <Rating amount={infomationMovie.rate.amount} total={infomationMovie.rate.total} />
                </Col>
              </Row>
            </div>
          </Row>

          <div className="episode-section">
            <div className="episode-section-title">
              <h3>Tập phim</h3>
            </div>
            <ul className="list-movie-episodes">
              {infomationMovie.episodes?.map((item, index) => (
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
        </Container>
      </div>
    )
  ) : (
    <></>
  );

  return section;
}

export default InformationMovie;

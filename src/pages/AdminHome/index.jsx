import React, { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Row, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { adminActions } from '../../redux-toolkit/slice/admin';
import './style.scss';

AdminHome.propTypes = {};

function AdminHome(props) {
  const dispatch = useDispatch();

  const movieList = useSelector((state) => state.admin.movieList);
  const genres = useSelector((state) => state.public.genres);

  const [data, setData] = useState({
    byLikes: [],
    byViews: [],
    viewsTotal: 0,
    likeTotal: 0,
  });
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(adminActions.fetchMovieList());
  }, []);

  useEffect(() => {
    console.log(movieList.length);
    let viewsTotal = 0;
    let likeTotal = 0;
    movieList?.forEach((movies) => {
      viewsTotal = viewsTotal + movies.views;
      likeTotal = likeTotal + movies.likes;
    });

    // Sort Movie < by View
    const byView = [...movieList];
    byView?.sort(function (a, b) {
      return b.views - a.views;
    });

    // Sort Movie < by Like
    let byLike = [...movieList];

    byLike.sort(function (a, b) {
      return b.likes - a.likes;
    });

    setData({
      byViews: byView.splice(0, 4),
      byLike: byLike.splice(0, 4),
      viewsTotal: viewsTotal,
      likeTotal: likeTotal,
    });
  }, [movieList]);

  return (
    <>
      <div className="container">
        <div className="dashboard">
          <h1 className="title">Thông tin</h1>
          <Row>
            <Col md={6} xl={4}>
              <Card>
                <Card.Body className="infor-card">
                  <h6 className="mb-4">Lượng Views</h6>
                  <div className="row d-flex align-items-center">
                    <div className="col-9">
                      <h3 className="f-w-300 d-flex align-items-center m-b-0">
                        <i className="feather icon-arrow-up text-c-green f-30 m-r-5" />
                        {data.viewsTotal}
                      </h3>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} xl={4}>
              <Card>
                <Card.Body className="infor-card">
                  <h6 className="mb-4">Lượng Like</h6>
                  <div className="row d-flex align-items-center">
                    <div className="col-9">
                      <h3 className="f-w-300 d-flex align-items-center m-b-0">
                        <i className="feather icon-arrow-down text-c-red f-30 m-r-5" />{' '}
                        {data.likeTotal}
                      </h3>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} xl={4}>
              <Card>
                <Card.Body className="infor-card">
                  <h6 className="mb-4">Số lượng phim</h6>
                  <div className="row d-flex align-items-center">
                    <div className="col-9">
                      <h3 className="f-w-300 d-flex align-items-center m-b-0">
                        <i className="feather icon-arrow-up text-c-green f-30 m-r-5" />{' '}
                        {movieList.length}
                      </h3>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <h1 className="title">Top lượt xem</h1>
          <div>
            <Table striped responsive="lg" bordered hover variant="dark">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Tên phim</th>
                  <th>Tên khác</th>
                  <th>Loại phim</th>
                  <th>Lượt Xem</th>
                </tr>
              </thead>
              <tbody>
                {data.byViews?.map((movie, index) => (
                  <tr key={index} onClick={() => navigate(`/xem-phim/${movie.name_URL}`)}>
                    <td>{index}</td>
                    <td>{movie.name}</td>
                    <td>{movie.other_name}</td>
                    <td>{movie.type_movie === 'phimle' ? 'Phim lẻ' : 'Phim bộ'}</td>
                    <td>{movie.views}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
          <h1 className="title">Top lượt Thích</h1>
          <div>
            <Table striped responsive="lg" bordered hover variant="dark">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Tên phim</th>
                  <th>Tên khác</th>
                  <th>Loại phim</th>
                  <th>Lượt Thích</th>
                </tr>
              </thead>
              <tbody>
                {data.byLike?.map((movie, index) => (
                  <tr key={index} onClick={() => navigate(`/xem-phim/${props.movie.name_URL}`)}>
                    <td>{index}</td>
                    <td>{movie.name}</td>
                    <td>{movie.other_name}</td>
                    <td>{movie.type_movie === 'phimle' ? 'Phim lẻ' : 'Phim bộ'}</td>
                    <td>{movie.likes}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminHome;

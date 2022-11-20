import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { adminActions } from '../../redux-toolkit/slice/admin';
import { Controller, useForm } from 'react-hook-form';
import MUIDataTable from 'mui-datatables';
import adminApi from '../../api/adminApi';
import './style.scss';
import MovieModal from '../../components/MovieModal';
import { WindowRounded, WindowSharp } from '@mui/icons-material';
import { alertClasses } from '@mui/material';

function MovieList(props) {
  const dispatch = useDispatch();
  const [showModalUpdateMovie, setShowModalUpdateMovie] = useState(false);
  const [movieSelected, setMovieSelected] = useState('');
  const [data, setData] = useState([]);
  const [video, setVideo] = useState(undefined);
  const [videoUrl, setVideoUrl] = useState('');
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [idMovieAddEpisode, setIdMovieAddEpisode] = useState('');
  const [showModalAddEpisode, setShowModalAddEpisode] = useState(false);
  const movieList = useSelector((state) => state.admin.movielist);
  const genres = useSelector((state) => state.public.genres);
  const countries = useSelector((state) => state.public.countries);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm();

  useEffect(() => {
    fetchAllMovie();
  }, []);

  const columns = [
    'Tên phim',
    'Tên khác',
    'Loại phim',
    'Lượt xem',
    'Lượt thích',
    'Ngày tạo',
    {
      name: 'Chỉnh sửa',
      options: {
        filter: false,
        customBodyRender: (value, tableMeta, updateValue) => (
          <>
            <Button
              variant="warning"
              className="button-edit"
              onClick={() => {
                console.log(value._id);
                setMovieSelected(value._id);
                setShowModalUpdateMovie(!showModalUpdateMovie);
              }}
            >
              {' '}
              Chỉnh sửa phim
            </Button>
            <Button
              onClick={() => {
                handleRemoveMovie(value);
              }}
              variant="danger"
              className="button-edit"
            >
              Xóa phim
            </Button>

            <Button
              onClick={() => {
                setShowModalAddEpisode(true);
                setIdMovieAddEpisode(value._id);
              }}
              variant="success"
              className="button-edit"
            >
              Thêm tập mới
            </Button>
          </>
        ),
      },
    },
  ];

  const options = {
    selectableRows: 'none',

    download: false,
    print: false,
  };

  const fetchAllMovie = async () => {
    const res = await adminApi.getAllMovies();

    let newData = [];
    res.movies.map((movie) =>
      newData.push([
        movie.name,
        movie.other_name,
        movie.type_movie,
        movie.views,
        movie.likes,
        movie.create_at,
        movie,
      ])
    );
    setData(newData);
  };

  const handleRemoveMovie = async (movie) => {
    if (window.confirm(`Bạn chắc chắn muốn xóa phim: ${movie.name}`) === true) {
      const res = await adminApi.removeMovie(movie._id);
      if (res.success === true) fetchAllMovie();
    }
  };

  const handleHideModalAddEpisode = () => {
    setShowModalAddEpisode(false);
  };

  const handleAddEpisode = async (data) => {
    console.log({
      name: data.name,
      movie: idMovieAddEpisode,
      sources: [
        {
          server: 'local',
          src: data.srcLocal,
        },
        {
          server: 'abyss',
          src: data.srcAbyss,
        },
        {
          server: 'mega',
          src: data.srcMega,
        },
        {
          server: 'ok',
          src: data.srcOk,
        },
      ],
    });
    const res = await adminApi.addNewEpisode({
      name: data.name,
      movie: idMovieAddEpisode,
      sources: [
        {
          server: 'local',
          src: data.srcLocal,
        },
        {
          server: 'abyss',
          src: data.srcAbyss,
        },
        {
          server: 'mega',
          src: data.srcMega,
        },
        {
          server: 'ok',
          src: data.srcOk,
        },
      ],
    });
    console.log(res);
    if (res.success) {
      handleHideModalAddEpisode();
      setVideoUrl('');
      setIdMovieAddEpisode(undefined);
      reset();
    }
  };

  return (
    <div className="">
      <MUIDataTable title={'Danh sách phim'} data={data} columns={columns} options={options} />

      {/* modal import video */}
      <Modal show={showModalAddEpisode} onHide={handleHideModalAddEpisode}>
        <Modal.Header closeButton>
          <Modal.Title>Thêm Tập phim mới</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Label>Tên tập phim</Form.Label>
            <Form.Control type="text" {...register('name')} placeholder="Tên tập phim" />

            <Form.Label>Url server local</Form.Label>
            <Form.Control type="text" {...register('srcLocal')} placeholder="Url server local" />

            <Form.Label>Url server abyss</Form.Label>
            <Form.Control type="text" {...register('srcAbyss')} placeholder="Url server abyss" />

            <Form.Label>Url server mega</Form.Label>
            <Form.Control type="text" {...register('srcMega')} placeholder="Url server mega" />

            <Form.Label>Url server ok</Form.Label>
            <Form.Control type="text" {...register('srcOk')} placeholder="Url server ok " />

            <Button
              type="button"
              variant="success"
              size="lg"
              style={{ float: 'right', margin: '20px 10px' }}
              onClick={handleSubmit(handleAddEpisode)}
            >
              Thêm tập mới
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <MovieModal
        show={showModalUpdateMovie}
        movieSelected={movieSelected}
        onHide={() => setShowModalUpdateMovie(!showModalUpdateMovie)}
      />
    </div>
  );
}

export default MovieList;

import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import publicApi from '../../api/publicApi';
import MovieList from '../../components/Movie/MovieList';

PageMovieList.propTypes = {};

function PageMovieList(props) {
  const location = useLocation();
  const countries = useSelector((state) => state.public.countries);
  const genres = useSelector((state) => state.public.genres);
  const years = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022];
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const [listMovie, setListMovie] = useState([]);

  const [query, setQuery] = useState(() => {
    let initQuery = { _limit: 24 };

    if (location.pathname.split('/')[1] === 'tim-kiem') {
      let search = location.search.split('=')[1];
      let newInitQuery = { ...initQuery, name: search };
      initQuery = newInitQuery;
    }
    if (location.pathname.split('/')[1] === 'phim-le') {
      let year = location.pathname.split('/')[2];
      let newInitQuery = { ...initQuery, type_movie: 'phimle', year: year };
      initQuery = newInitQuery;
    }

    if (location.pathname.split('/')[1] === 'phim-bo') {
      let countryName = location.pathname.split('/')[2];
      let countryID = '';
      countries?.map((item) => {
        if (item.name_URL === countryName) countryID = item._id;
      });
      let newInitQuery = { ...initQuery, type_movie: 'phimbo', country: countryID };
      initQuery = newInitQuery;
    }

    if (location.pathname.split('/')[1] === 'quoc-gia') {
      let countryName = location.pathname.split('/')[2];
      let countryID = '';
      countries?.map((item) => {
        if (item.name_URL === countryName) countryID = item._id;
      });
      let newInitQuery = { ...initQuery, country: countryID };
      initQuery = newInitQuery;
    }

    if (location.pathname.split('/')[1] === 'the-loai') {
      let genresName = location.pathname.split('/')[2];
      let genresID = '';
      genres?.map((item) => {
        if (item.name_URL === genresName) genresID = item._id;
      });
      let newInitQuery = { ...initQuery, genres: genresID };
      initQuery = newInitQuery;
    }

    return initQuery;
  });

  useEffect(() => {
    function getQueryInURL() {
      if (location.pathname.split('/')[1] === 'phim-le') {
        let year = location.pathname.split('/')[2];
        setQuery({ ...query, type_movie: 'phimle', year: year, name: '', country: '', genres: '' });
      }

      if (location.pathname.split('/')[1] === 'phim-bo') {
        let countryName = location.pathname.split('/')[2];
        let countryID = '';
        countries?.map((item) => {
          if (item.name_URL === countryName) countryID = item._id;
        });
        setQuery({
          ...query,
          type_movie: 'phimbo',
          country: countryID,
          name: '',
          genres: '',
          year: '',
          _limit: 24,
        });
      }

      if (location.pathname.split('/')[1] === 'quoc-gia') {
        let countryName = location.pathname.split('/')[2];
        let countryID = '';
        countries?.map((item) => {
          if (item.name_URL === countryName) countryID = item._id;
        });
        setQuery({
          ...query,
          type_movie: '',
          country: countryID,
          name: '',
          genres: '',
          year: '',
          _limit: 24,
        });
      }

      if (location.pathname.split('/')[1] === 'the-loai') {
        let genresName = location.pathname.split('/')[2];
        let genresID = '';
        genres?.map((item) => {
          if (item.name_URL === genresName) genresID = item._id;
        });
        setQuery({
          ...query,
          type_movie: '',
          genres: genresID,
          name: '',
          country: '',
          year: '',
          _limit: 24,
        });
      }

      if (location.pathname.split('/')[1] === 'tim-kiem') {
        setQuery({
          ...query,
          name: location.search.split('name=')[1],
          country: '',
          genres: '',
          year: '',
          type_movie: '',
          _limit: 24,
        });
      }
    }
    getQueryInURL();
  }, [location.pathname, location.search]);

  useEffect(() => {
    const fetchMovies = async () => {
      console.log(query);
      const res = await publicApi.getMovies(query);
      setListMovie(res);
    };

    fetchMovies();
  }, [query]);

  return (
    <div className="container" style={{ marginTop: '100px' }}>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} md="4">
            <Form.Label style={{ color: '#febb00' }}>Quốc gia</Form.Label>
            <Form.Select
              {...register('country')}
              onChange={(e) => {
                setQuery({ ...query, country: e.target.value, _limit: 24 });
              }}
            >
              <option value=""> Tất cả</option>
              {countries?.map((country, index) => (
                <option key={index} value={country._id}>
                  {country.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} md="4">
            <Form.Label style={{ color: '#febb00' }}>Thể loại</Form.Label>
            <Form.Select
              {...register('genres')}
              onChange={(e) => {
                setQuery({ ...query, genres: e.target.value, _limit: 24 });
              }}
            >
              <option> Tất cả</option>
              {genres?.map((genre, index) => (
                <option key={index} value={genre._id}>
                  {genre.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label style={{ color: '#febb00' }}>Năm sản xuất</Form.Label>
            <Form.Select
              {...register('year')}
              onChange={(e) => {
                setQuery({ ...query, year: e.target.value, _limit: 24 });
              }}
            >
              <option value=""> Tất cả</option>
              {years?.map((year, index) => (
                <option key={index} value={year}>
                  {year}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Row>
      </Form>
      <MovieList isPageSearch={true} listMovie={listMovie} />
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        {listMovie?.pagination?.total_docs > query._limit ? (
          <Button
            style={{ minWidth: '200px' }}
            variant="warning"
            type="button"
            onClick={() => setQuery({ ...query, _limit: query._limit + 24 })}
          >
            Thêm
          </Button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default PageMovieList;

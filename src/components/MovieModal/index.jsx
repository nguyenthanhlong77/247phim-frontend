import React, { useEffect, useState } from 'react';
import { Modal, Form, Row, Col, Button, InputGroup, Table } from 'react-bootstrap';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';

import { useSelector } from 'react-redux';

function ModalMovie(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const [genresOptions, setGenresOptions] = useState([]);
  const [movie, setMovie] = useState({
    name: 'Ấu Trùng Lava: Mặt Dây Chuyền 1',
    other_name: 'Larva Pendant',
    name_URL: 'au-trung-lava-mat-day-chuyen-1',
    director: 'Đang cập nhật',
    type_movie: 'phimle',
    year: '2022',
    duration: 33,
    description:
      'Phần phim ngắn ngớ ngẩn tiếp theo của “Đảo ấu trùng” và “Bộ phim Đảo ấu trùng” xoay quanh những sự cố vụng về của đôi bạn hay xì hơi Đỏ và Vàng trong thành phố.',
    casts: 'Đang cập nhật',
    genres: ['629c74ca1fe09d0c71de1098'],
    language: 'Tiếng Việt',
    URL_image: 'https://biphim.cc/public/files/flim/120x160/1653569056.jpg',
    country: '629c725d1fe09d0c71de1076',
  });
  const countries = useSelector((state) => state.public.countries);
  const genres = useSelector((state) => state.public.genres);
  useEffect(() => {
    const newGenresOption = [];
    for (let i = 0; i < genres?.length; i++) {
      newGenresOption.push({ value: genres[i]._id, label: genres[i].name });
    }
    setGenresOptions(newGenresOption);
  }, [genres]);

  const handleUpdate = (data) => {};

  return (
    <Modal size="lg" show={props.show} onHide={props.onHide}>
      {console.log(props.movieSelected)}
      <Modal.Header closeButton>
        <Modal.Title>Thông tin phim</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="6">
              <Form.Label>Tên phim</Form.Label>
              <Form.Control
                {...register('name')}
                type="text"
                placeholder="Tên phim"
                defaultValue={movie.name}
              />
              {errors.name && <p className="error-message">{errors.name.message}</p>}
            </Form.Group>

            <Form.Group as={Col} md="6">
              <Form.Label>Tên khác</Form.Label>
              <Form.Control
                {...register('other_name')}
                type="text"
                placeholder="Tên khác"
                defaultValue={movie.other_name}
              />
              {errors.other_name && <p className="error-message">{errors.other_name.message}</p>}
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustomUsername">
              <Form.Label>URL </Form.Label>
              <Form.Control
                {...register('name_URL')}
                type="text"
                placeholder="URL"
                defaultValue={movie.name_URL}
              />
              {errors.name_URL && <p className="error-message">{errors.name_URL.message}</p>}
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationCustom02">
              <Form.Label>Danh sách diễn viên </Form.Label>
              <Form.Control
                {...register('casts')}
                type="text"
                placeholder="Danh sách diễn viên"
                defaultValue={movie.casts}
              />
              {errors.casts && <p className="error-message">{errors.casts.message}</p>}
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Năm sản xuất</Form.Label>
              <Form.Control
                {...register('year')}
                type="text"
                placeholder="Năm"
                defaultValue={movie.years}
              />
              {errors.year && <p className="error-message">{errors.year.message}</p>}
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Thời lượng</Form.Label>
              <Form.Control
                {...register('duration')}
                type="text"
                placeholder="Phút"
                defaultValue={movie.duration}
              />
              {errors.duration && <p className="error-message">{errors.duration.message}</p>}
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Đạo diễn</Form.Label>
              <Form.Control
                {...register('director')}
                type="text"
                placeholder="Đạo diễn"
                defaultValue={movie.director}
              />
              {errors.director && <p className="error-message">{errors.director.message}</p>}
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Loại phim</Form.Label>
              <Form.Select {...register('type_movie')} defaultValue={movie.type_movie}>
                <option value="phimle">Phim lẻ</option>
                <option value="phimbo">Phim bộ</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Quốc gia</Form.Label>
              <Form.Select {...register('country')} defaultValue={movie.countries}>
                {countries?.map((country, index) => (
                  <option value={country._id} key={index}>
                    {country.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Ngôn ngữ</Form.Label>
              <Form.Control
                {...register('language')}
                type="text"
                placeholder="Ngôn ngữ"
                defaultValue={movie.language}
              />
              {errors.language && <p className="error-message">{errors.language.message}</p>}
            </Form.Group>
          </Row>

          <Form.Group as={Col} md="12" controlId="validationCustom01">
            <Form.Label>Thể loại</Form.Label>
            <Controller
              control={control}
              name="genres"
              render={({ field, value }) => (
                <Select
                  {...field}
                  closeMenuOnSelect={false}
                  isMulti
                  options={genresOptions}
                  defaultValue={{ value: movie.genres, label: 'Khong the bo lo' }}
                />
              )}
            />
            {errors.genres && <p className="error-message">{errors.genres.message}</p>}
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} md="12">
              <Form.Label>URL hành ảnh</Form.Label>
              <InputGroup>
                {/* <Button  id="button-addon2" onClick={handleShowModalImportImage}>
                                Thêm ảnh
                            </Button> */}
                {/* <InputGroup.Text onClick={handleShowModalImportImage} >Thêm ảnh</InputGroup.Text> */}
                <Form.Control
                  {...register('URL_image')}
                  // value={imageUrl}
                  // onClick={handleShowModalImportImage}
                  type="text"
                  placeholder="URL hình ảnh"
                  defaultValue={movie.URL_image}
                />
              </InputGroup>
              {errors.URL_image && <p className="error-message">{errors.URL_image.message}</p>}
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} md="12">
              <Form.Label>Mô tả</Form.Label>
              <Form.Control
                {...register('description')}
                as="textarea"
                rows={3}
                type="text"
                defaultValue={movie.description}
              />
              {errors.description && <p className="error-message">{errors.description.message}</p>}
            </Form.Group>
          </Row>

          <Button
            type="submit"
            variant="warning"
            size="lg"
            style={{ marginTop: '20px' }}
            onClick={handleSubmit(handleUpdate)}
          >
            Cập nhật
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default ModalMovie;

import React, { useState } from 'react';
import { Modal, Form, Button, Row, Col } from 'react-bootstrap';
import { Controler, useForm, useFieldArray } from 'react-hook-form';
import PropTypes from 'prop-types';

CreateEpisodeModal.propTypes = {};

function CreateEpisodeModal(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'sources',
  });

  // const [sources, setSources] = useState([{ source_name: '', src: '' }]);

  // const handleAddNew = () => {
  //   setSources([...sources, { source_name: '', src: '' }]);
  // };

  // const handleRemove = (index) => {
  //   const list = [...sources];
  //   list.splice(index, 1);
  //   setSources(list);
  // };

  const handleCreate = (data) => {
    props.onSubmit(data);
  };
  return (
    <Modal show={props.show} onHide={props.onHide} size={'lg'}>
      <Modal.Header closeButton>
        <Modal.Title>Thêm Tập phim mới</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Label>Tên tập phim</Form.Label>
          <Form.Control type="text" {...register('name')} placeholder="Tên tập phim" />
          <Form.Label>Tên tập phim</Form.Label>

          <Form.Label>Tên Url</Form.Label>
          <Form.Control type="text" {...register('name_URL')} placeholder="Tên URL tập phim" />

          <Form.Label>Sources</Form.Label>

          <Button
            type="button"
            style={{ margin: '10px 20px' }}
            onClick={() => append()}
            variant="info"
          >
            Thêm
          </Button>

          {fields.map((field, index) => (
            <Row key={field.id} style={{ margin: '10px 0px' }}>
              <Col md={3}>
                <Form.Control
                  key={field.id}
                  type="text"
                  {...register(`sources.${index}.server_name`)}
                  placeholder="Tên tập phim"
                />
              </Col>

              <Col md={8}>
                <Form.Control
                  key={field.id}
                  type="text"
                  {...register(`sources.${index}.src`)}
                  placeholder="Tên tập phim"
                />
              </Col>

              <Col md={1}>
                <Button onClick={() => remove(index)} variant="danger">
                  Xóa
                </Button>
              </Col>
            </Row>
          ))}
          <Button
            type="button"
            variant="success"
            size="lg"
            style={{ float: 'right', margin: '20px 10px' }}
            onClick={handleSubmit(handleCreate)}
          >
            Thêm tập mới
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default CreateEpisodeModal;

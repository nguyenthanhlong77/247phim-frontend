import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { Row, Col, Tab, Nav, Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useSelector } from 'react-redux';

function Profile(props) {
  const profile = useSelector((state) => state.auth.currentUser);
  const schema = yup.object({});

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm({
    // resolver: yupResolver(schema),
  });

  const { register: register2, handleSubmit: handleSubmit2 } = useForm({
    // resolver: yupResolver(schema),
  });

  const handleUpdateProfile = (data) => {
    console.log(data);
    window.alert(data);
  };

  const handleChangePassword = (data) => {
    console.log(data);
    window.alert(data);
  };

  return (
    <div className="container">
      <div className=" user-profile">
        <div className="">
          <div className="row left">
            <Tab.Container id="left-tabs" defaultActiveKey="profile">
              <Row>
                <Col sm={3}>
                  <Nav variant="pills" className="relative-column">
                    <Nav.Link eventKey="profile" className="name-title">
                      Tài khoản
                    </Nav.Link>
                    <Nav.Link eventKey="password" className="name-title">
                      Đổi mật khẩu
                    </Nav.Link>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="profile">
                      <div className="title-cate">
                        <span>Thông tin tài khoản</span>
                      </div>
                      <ul className="profileForm">
                        <Form id="profileForm">
                          <li>
                            <Form.Label>Username</Form.Label>
                            <Form.Label>{profile?.username}</Form.Label>
                          </li>
                          <li>
                            <Form.Label>Họ tên</Form.Label>
                            <input {...register('name')} type="text" placeholder="họ và tên" />
                          </li>
                          <li>
                            <Form.Label>Phone</Form.Label>
                            <input {...register('phone')} type="text" placeholder="số điện thoại" />
                          </li>
                          <li>
                            <Form.Label>Email</Form.Label>
                            <input
                              type="text"
                              {...register('email')}
                              name="email"
                              placeholder="email"
                              defaultValue={profile?.email}
                            ></input>
                          </li>
                          <Button
                            type="submit"
                            id="btnProfile"
                            className="btn-orange"
                            // data-toggle="modal"
                            // data-target="#success-modal"
                            onClick={handleSubmit(handleUpdateProfile)}
                          >
                            Lưu lại
                          </Button>
                        </Form>
                      </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="password">
                      <div className="title-cate">
                        <span>Đổi mặt khẩu</span>
                      </div>
                      <ul className="profileForm">
                        <Form id="changePasswordForm">
                          <li>
                            <Form.Label>Mật khẩu hiện tại</Form.Label>
                            <input
                              {...register2('password')}
                              type="password"
                              name="password"
                              placeholder="**********"
                            ></input>
                          </li>
                          <li>
                            <Form.Label>Mật khẩu mới</Form.Label>
                            <input
                              {...register2('newPassword')}
                              type="password"
                              name="newPassword"
                              placeholder="Mật khẩu mới"
                            ></input>
                          </li>
                          <li>
                            <Form.Label>Nhập lại mật khẩu mới</Form.Label>
                            <input
                              type="password"
                              {...register2('reNewPassword')}
                              name="reNewPassword"
                              placeholder="Nhập lại mật khẩu mới"
                            ></input>
                          </li>
                          <Button
                            type="submit"
                            id="btnProfile2"
                            className="btn-orange"
                            onClick={handleSubmit2(handleChangePassword)}
                          >
                            Đổi mật khẩu
                          </Button>
                        </Form>
                      </ul>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

import React from 'react';
import { Card, CardGroup, Row, Col, Image } from 'react-bootstrap';
import './style.scss';

function RightBlog(props) {
  let title = props.title;
  return (
    <div className="" style={{ marginTop: '50px' }}>
      <div className="title-cate" style={{ borderBottom: '1px solid #405266' }}>
        <h2> {title}</h2>
      </div>
      <br />
      <div>
        <Row style={{ marginTop: '10px' }}>
          <Col lg={4}>
            <Image
              src="https://static1.dienanh.net/upload/202211/1x1_d05606d7-2897-4682-bded-c1958e22a7bc.jpg"
              className="right-image"
            ></Image>
          </Col>
          <Col lg={8}>
            <div className="item-description">
              <h6>Lời Nguyền Tầm Da: Ý tưởng mới lạ nhưng triển khai khó hiểu</h6>
            </div>
          </Col>
        </Row>
        <Row style={{ marginTop: '10px' }}>
          <Col lg={4}>
            <Image
              src="https://static1.dienanh.net/upload/202211/1x1_d05606d7-2897-4682-bded-c1958e22a7bc.jpg"
              className="right-image"
            ></Image>
          </Col>
          <Col lg={8}>
            <div className="item-description">
              <h6>Lời Nguyền Tầm Da: Ý tưởng mới lạ nhưng triển khai khó hiểu</h6>
            </div>
          </Col>
        </Row>
        <Row style={{ marginTop: '10px' }}>
          <Col lg={4}>
            <Image
              src="https://static1.dienanh.net/upload/202211/1x1_d05606d7-2897-4682-bded-c1958e22a7bc.jpg"
              className="right-image"
            ></Image>
          </Col>
          <Col lg={8}>
            <div className="item-description">
              <h6>Lời Nguyền Tầm Da: Ý tưởng mới lạ nhưng triển khai khó hiểu</h6>
            </div>
          </Col>
        </Row>
        <Row style={{ marginTop: '10px' }}>
          <Col lg={4}>
            <Image
              src="https://static1.dienanh.net/upload/202211/1x1_d05606d7-2897-4682-bded-c1958e22a7bc.jpg"
              className="right-image"
            ></Image>
          </Col>
          <Col lg={8}>
            <div className="item-description">
              <h6>Lời Nguyền Tầm Da: Ý tưởng mới lạ nhưng triển khai khó hiểu</h6>
            </div>
          </Col>
        </Row>
        <Row style={{ marginTop: '10px' }}>
          <Col lg={4}>
            <Image
              src="https://static1.dienanh.net/upload/202211/1x1_d05606d7-2897-4682-bded-c1958e22a7bc.jpg"
              className="right-image"
            ></Image>
          </Col>
          <Col lg={8}>
            <div className="item-description">
              <h6>Lời Nguyền Tầm Da: Ý tưởng mới lạ nhưng triển khai khó hiểu</h6>
            </div>
          </Col>
        </Row>
        <Row style={{ marginTop: '10px' }}>
          <Col lg={4}>
            <Image
              src="https://static1.dienanh.net/upload/202211/1x1_d05606d7-2897-4682-bded-c1958e22a7bc.jpg"
              className="right-image"
            ></Image>
          </Col>
          <Col lg={8}>
            <div className="item-description">
              <h6>Lời Nguyền Tầm Da: Ý tưởng mới lạ nhưng triển khai khó hiểu</h6>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default RightBlog;

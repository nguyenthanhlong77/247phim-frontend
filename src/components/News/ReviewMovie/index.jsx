import React from 'react';
import { Card, CardGroup, Row, Col, Image, Button } from 'react-bootstrap';
import './style.scss';

function ReviewMovie(props) {
  let title = props.title;

  return (
    <div className="">
      <div className="title-cate" style={{ marginTop: '50px' }}>
        <h2>{title}</h2>
      </div>
      <Row>
        <Col lg={4}>
          <Card style={{ width: '16rem', background: 'rgb(7,24,41)', marginTop: '10px' }}>
            <Card.Img
              variant="top"
              src="https://static1.dienanh.net/upload/202211/2x1_7d7e9acc-086f-4593-b367-78c9a025a247.jpg"
            />
            <Card.Body>
              <Card.Title className="item-title">
                Nghi Thức Cấm: Kinh dị tạm ổn nhưng kịch bản lại như “lẩu thập cẩm”
              </Card.Title>
              <Card.Text className="item-description">
                Kịch bản phim bị đẩy vào lối cũ bởi cách kể chuyện chưa có sự mới mẻ, thậm chí là
                chắp vá đến mức khó chịu.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4}>
          <Card style={{ width: '16rem', background: 'rgb(7,24,41)', marginTop: '10px' }}>
            <Card.Img
              variant="top"
              src="https://static1.dienanh.net/upload/202211/2x1_7d7e9acc-086f-4593-b367-78c9a025a247.jpg"
            />
            <Card.Body>
              <Card.Title className="item-title">
                Nghi Thức Cấm: Kinh dị tạm ổn nhưng kịch bản lại như “lẩu thập cẩm”
              </Card.Title>
              <Card.Text className="item-description">
                Kịch bản phim bị đẩy vào lối cũ bởi cách kể chuyện chưa có sự mới mẻ, thậm chí là
                chắp vá đến mức khó chịu.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4}>
          <Card style={{ width: '16rem', background: 'rgb(7,24,41)', marginTop: '10px' }}>
            <Card.Img
              variant="top"
              src="https://static1.dienanh.net/upload/202211/2x1_7d7e9acc-086f-4593-b367-78c9a025a247.jpg"
            />
            <Card.Body>
              <Card.Title className="item-title">
                Nghi Thức Cấm: Kinh dị tạm ổn nhưng kịch bản lại như “lẩu thập cẩm”
              </Card.Title>
              <Card.Text className="item-description">
                Kịch bản phim bị đẩy vào lối cũ bởi cách kể chuyện chưa có sự mới mẻ, thậm chí là
                chắp vá đến mức khó chịu.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4}>
          <Card style={{ width: '16rem', background: 'rgb(7,24,41)', marginTop: '10px' }}>
            <Card.Img
              variant="top"
              src="https://static1.dienanh.net/upload/202211/2x1_7d7e9acc-086f-4593-b367-78c9a025a247.jpg"
            />
            <Card.Body>
              <Card.Title className="item-title">
                Nghi Thức Cấm: Kinh dị tạm ổn nhưng kịch bản lại như “lẩu thập cẩm”
              </Card.Title>
              <Card.Text className="item-description">
                Kịch bản phim bị đẩy vào lối cũ bởi cách kể chuyện chưa có sự mới mẻ, thậm chí là
                chắp vá đến mức khó chịu.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4}>
          <Card style={{ width: '16rem', background: 'rgb(7,24,41)', marginTop: '10px' }}>
            <Card.Img
              variant="top"
              src="https://static1.dienanh.net/upload/202211/2x1_7d7e9acc-086f-4593-b367-78c9a025a247.jpg"
            />
            <Card.Body>
              <Card.Title className="item-title">
                Nghi Thức Cấm: Kinh dị tạm ổn nhưng kịch bản lại như “lẩu thập cẩm”
              </Card.Title>
              <Card.Text className="item-description">
                Kịch bản phim bị đẩy vào lối cũ bởi cách kể chuyện chưa có sự mới mẻ, thậm chí là
                chắp vá đến mức khó chịu.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4}>
          <Card style={{ width: '16rem', background: 'rgb(7,24,41)', marginTop: '10px' }}>
            <Card.Img
              variant="top"
              src="https://static1.dienanh.net/upload/202211/2x1_7d7e9acc-086f-4593-b367-78c9a025a247.jpg"
            />
            <Card.Body>
              <Card.Title className="item-title">
                Nghi Thức Cấm: Kinh dị tạm ổn nhưng kịch bản lại như “lẩu thập cẩm”
              </Card.Title>
              <Card.Text className="item-description">
                Kịch bản phim bị đẩy vào lối cũ bởi cách kể chuyện chưa có sự mới mẻ, thậm chí là
                chắp vá đến mức khó chịu.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ReviewMovie;

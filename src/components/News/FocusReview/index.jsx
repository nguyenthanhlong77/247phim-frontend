import React from 'react';
import { Card, CardGroup, Row, Col } from 'react-bootstrap';
import './style.scss';

function FocusReview(props) {
  return (
    <div className="">
      <div className="title-cate">
        <h2> Tiêu điểm Review</h2>
      </div>
      <Row>
        <Col sm={3}>
          <Card>
            <Card.Img
              variant="top"
              src="https://static1.dienanh.net/upload/202211/9e5213d3-b9f0-4168-b3b1-986f8ecb3ba9.jpg"
            />
            <Card.ImgOverlay>
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  color: 'white',
                  margin: 0,
                  padding: '15px',
                  background: 'rgba(0, 0, 0, 0.5)',
                }}
              >
                <Card.Title style={{ textTransform: 'uppercase' }}>
                  Lời Nguyền Tầm Da: Ý tưởng mới lạ nhưng triển khai khó hiểu
                </Card.Title>
              </div>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col sm={3}>
          <Card>
            <Card.Img
              variant="top"
              src="https://static1.dienanh.net/upload/202211/9e5213d3-b9f0-4168-b3b1-986f8ecb3ba9.jpg"
            />
            <Card.ImgOverlay>
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  color: 'white',
                  margin: 0,
                  padding: '15px',
                  background: 'rgba(0, 0, 0, 0.5)',
                }}
              >
                <Card.Title style={{ textTransform: 'uppercase' }}>
                  Lời Nguyền Tầm Da: Ý tưởng mới lạ nhưng triển khai khó hiểu
                </Card.Title>
              </div>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col sm={3}>
          <Card>
            <Card.Img
              variant="top"
              src="https://static1.dienanh.net/upload/202211/9e5213d3-b9f0-4168-b3b1-986f8ecb3ba9.jpg"
            />
            <Card.ImgOverlay>
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  color: 'white',
                  margin: 0,
                  padding: '15px',
                  background: 'rgba(0, 0, 0, 0.5)',
                }}
              >
                <Card.Title style={{ textTransform: 'uppercase' }}>
                  Lời Nguyền Tầm Da: Ý tưởng mới lạ nhưng triển khai khó hiểu
                </Card.Title>
              </div>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col sm={3}>
          <Card>
            <Card.Img
              variant="top"
              src="https://static1.dienanh.net/upload/202211/9e5213d3-b9f0-4168-b3b1-986f8ecb3ba9.jpg"
            />
            <Card.ImgOverlay>
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  color: 'white',
                  margin: 0,
                  padding: '15px',
                  background: 'rgba(0, 0, 0, 0.5)',
                }}
              >
                <Card.Title style={{ textTransform: 'uppercase' }}>
                  Lời Nguyền Tầm Da: Ý tưởng mới lạ nhưng triển khai khó hiểu
                </Card.Title>
              </div>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default FocusReview;

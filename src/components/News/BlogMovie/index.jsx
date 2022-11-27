import React from 'react';
import { Card, CardGroup, Row, Col, Image } from 'react-bootstrap';
import './style.scss';

function BlogMovie(props) {
  let title = props.title;
  console.log(title);
  return (
    <div className="">
      <div className="title-cate" style={{ marginTop: '50px' }}>
        <h2>{title}</h2>
      </div>
      <div className="blog-movie-item">
        <Row style={{ marginTop: '20px' }}>
          <Col lg={4}>
            <Image
              src="https://static1.dienanh.net/upload/202211/2x1_fe38395d-00df-4021-b955-89291677339a.jpg"
              width="300px"
              height="150px"
              className="image-content"
            />
          </Col>

          <Col lg={7}>
            <div className="item-infor">
              <div className="item-title">6 phim Hàn về "nữ quyền" Hàn hay nhất mọi thời đại</div>
              <div className="item-description">
                <p>
                  Loạt phim mang đề tài “nữ quyền” chưa khi nào hết hot trên màn ảnh Hàn với cách
                  xây dựng hình tượng nhân vật mới lạ.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="blog-movie-item">
        <Row style={{ marginTop: '20px' }}>
          <Col lg={4}>
            <Image
              src="https://static1.dienanh.net/upload/202211/2x1_fe38395d-00df-4021-b955-89291677339a.jpg"
              width="300px"
              height="150px"
              className="image-content"
            />
          </Col>

          <Col lg={7}>
            <div className="item-infor">
              <div className="item-title">6 phim Hàn về "nữ quyền" Hàn hay nhất mọi thời đại</div>
              <div className="item-description">
                <p>
                  Loạt phim mang đề tài “nữ quyền” chưa khi nào hết hot trên màn ảnh Hàn với cách
                  xây dựng hình tượng nhân vật mới lạ.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="blog-movie-item">
        <Row style={{ marginTop: '20px' }}>
          <Col lg={4}>
            <Image
              src="https://static1.dienanh.net/upload/202211/2x1_fe38395d-00df-4021-b955-89291677339a.jpg"
              width="300px"
              height="150px"
              className="image-content"
            />
          </Col>

          <Col lg={7}>
            <div className="item-infor">
              <div className="item-title">6 phim Hàn về "nữ quyền" Hàn hay nhất mọi thời đại</div>
              <div className="item-description">
                <p>
                  Loạt phim mang đề tài “nữ quyền” chưa khi nào hết hot trên màn ảnh Hàn với cách
                  xây dựng hình tượng nhân vật mới lạ.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="blog-movie-item">
        <Row style={{ marginTop: '20px' }}>
          <Col lg={4}>
            <Image
              src="https://static1.dienanh.net/upload/202211/2x1_fe38395d-00df-4021-b955-89291677339a.jpg"
              width="300px"
              height="150px"
              className="image-content"
            />
          </Col>

          <Col lg={7}>
            <div className="item-infor">
              <div className="item-title">6 phim Hàn về "nữ quyền" Hàn hay nhất mọi thời đại</div>
              <div className="item-description">
                <p>
                  Loạt phim mang đề tài “nữ quyền” chưa khi nào hết hot trên màn ảnh Hàn với cách
                  xây dựng hình tượng nhân vật mới lạ.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="blog-movie-item">
        <Row style={{ marginTop: '20px' }}>
          <Col lg={4}>
            <Image
              src="https://static1.dienanh.net/upload/202211/2x1_fe38395d-00df-4021-b955-89291677339a.jpg"
              width="300px"
              height="150px"
              className="image-content"
            />
          </Col>

          <Col lg={7}>
            <div className="item-infor">
              <div className="item-title">6 phim Hàn về "nữ quyền" Hàn hay nhất mọi thời đại</div>
              <div className="item-description">
                <p>
                  Loạt phim mang đề tài “nữ quyền” chưa khi nào hết hot trên màn ảnh Hàn với cách
                  xây dựng hình tượng nhân vật mới lạ.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default BlogMovie;

import React from 'react';
import './style.scss';
// react-bootstrap
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

Footer.propTypes = {};

function Footer(props) {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col md={4}>
            <p className="title">Phim lẻ</p>
            <Link className="footer-link" to="/phim-le/hanh-dong">
              Phim hành động
            </Link>
            <Link className="footer-link" to="/phim-le/kiem-hiep">
              Phim kiếm hiệp
            </Link>
            <Link className="footer-link" to="/phim-le/kinh-di">
              Phim kinh dị
            </Link>
            <Link className="footer-link" to="/phim-le/vien-tuong">
              Phim viễn Tưởng
            </Link>
            <Link className="footer-link" to="/phim-le/hoat-hinh">
              Phim Hoạt hình
            </Link>
          </Col>
          <Col md={4}>
            <p className="title">Phim bộ</p>
            <Link className="footer-link" to="/phim-bo/trung-quoc">
              Trung Quốc
            </Link>
            <Link className="footer-link" to="/phim-bo/han-quoc">
              Hàn Quốc
            </Link>
            <Link className="footer-link" to="/phim-bo/thai-lan">
              Thái Lan
            </Link>
            <Link className="footer-link" to="/phim-bo/my">
              Mỹ
            </Link>
            <Link className="footer-link" to="/phim-bo/anh">
              Anh
            </Link>
          </Col>
          <Col md={4}>
            <p className="title">Thể loại</p>
            <Link className="footer-link" href="/the-loai/khong-the-bo-lo">
              Không thể bỏ lơ
            </Link>
            <Link className="footer-link" href="/the-loai/kiem-hiep">
              Kiếm hiệp
            </Link>
            <Link className="footer-link" href="/the-loai/hanh-dong">
              Hành động
            </Link>
            <Link className="footer-link" href="/the-loai/bom-tan">
              Bom tấm
            </Link>
            <Link className="footer-link" href="/the-loai/vien-tuong">
              Viễn tưởng
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;

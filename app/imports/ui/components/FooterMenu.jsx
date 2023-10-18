import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const FooterMenu = () => (
  <footer>
    <Container className="p-5">
      <Row>
        <Col>
          <Image src="https://beliftlab.com/static/images/common/logo3.png" width="145px" height="36px" />
        </Col>

        <Col>
          <p className="company">BELIFT LAB Inc.</p>
          <p>서울특별시 용산구 한강대로 42(42, Hangang-daero, Yongsan-gu, Seoul, Republic of Korea)</p>
          <p>COPYRIGHT © 2020 BELIFT LAB Copyrights All Rights Reserved.</p>
          <p className="company">PRIVACY POLICY</p>
        </Col>

        <Col>
          <Container>
            <Row>
              <Col>
                <div className="nav-item dropdown">
                  <div className="dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">ENG</div>
                  <hr />
                  <ul className="dropdown-menu" aria-labelledby="navbarDropDown">
                    <li>ENG</li>
                    <li>KOR</li>
                    <li>JPN</li>
                    <li>CHN</li>
                  </ul>
                </div>
              </Col>
              <Col>
                <div className="nav-item dropdown">
                  <div className="dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">FAMILY SITE</div>
                  <hr />
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>ENHYPEN JAPAN OFFICIAL SITE</li>
                  </ul>
                </div>
              </Col>
            </Row>

            <Row className="pt-5">
              <ul className="social-media">
                <li>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a href="#" target="_blank" className="naver">Naver</a>
                </li>
                <li>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a href="#" target="_blank" className="twitter">Twitter</a>
                </li>
                <li>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a href="#" target="_blank" className="facebook">Facebook</a>
                </li>
              </ul>
            </Row>
          </Container>
        </Col>

      </Row>
    </Container>
  </footer>
);

export default FooterMenu;

import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Rights = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Rights</h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="right-text-main"> © Adam Williams, [2025]. All rights reserved. </div>
        <div className="right-text"> All material on this site, including text, images, designs, videos, logos and other elements are the intellectual property of “nottheadam” aka Adam Williams or used with permission of the copyright holders. </div>

        <div className="right-text-main"> Content Usage </div>
        <div className="right-text"> Copying, reproduction, distribution, publication or any other use of the site materials without the written consent of the copyright holder is prohibited, except as provided by law. </div>

        <div className="right-text-main"> Personal usage </div>
        <div className="right-text"> You may view and download material from the site solely for your personal, non-commercial use with all copyright and copyright notices intact. </div>

        <div className="right-text-main"> Violation of rights </div>
        <div className="right-text"> Any unauthorized use of the site materials may entail liability in accordance with the current legislation of the Russian Federation and international norms. </div>

        <div className="right-text"> If you would like to use my work or discuss collaboration, contact me: nottheadams@gmail.com. </div>
        {/* <div className="right-text"> © Adam Williams, [2025]. All rights reserved. </div> */}
      </Container>
    </HelmetProvider>
  );
};

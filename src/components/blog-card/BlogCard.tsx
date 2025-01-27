import React from 'react';
import { BlogPostTemplatePageStrapiContent } from '../../data/interfaces/blog-post-template-page/BlogPostTemplatePageStrapiContent';
import { Link } from 'react-router-dom';
import { Col, Row, Image, Container } from 'react-bootstrap';
import styles from './blogCard.module.scss';

type Props = {
  strapiData: BlogPostTemplatePageStrapiContent;
};

const BlogCard: React.FC<Props> = ({ strapiData }) => {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <div data-testid="previous-post-blog-card">
      <Link
        to={`/blog/${strapiData.url}`}
        className="rounded-3 text-decoration-none"
        data-testid="blog-card-link"
        onClick={handleLinkClick}
      >
        <div
          className="d-flex flex-column rounded-3 h-100 p-3 shadow text-dark"
          data-testid="blog-card"
        >
          <Row>
            <Col>
              <div className="mb-3 d-flex justify-content-center">
                <Image
                  fluid
                  data-testid={`blog-card-landing-image-${strapiData.url}`}
                  src={strapiData.landingImage.data.attributes.url}
                  className={`${styles.blogCardImage} d-flex object-fit-cover rounded-3`}
                />
              </div>
            </Col>
          </Row>
          <Container className="mb-1 d-flex flex-column flex-grow-1">
            <Row className="mb-1">
              <Col>
                <h1
                  data-testid={`blog-card-title-${strapiData.url}`}
                  className="fs-2 fw-bold mb-1"
                >
                  {strapiData.title}
                </h1>
                <p
                  data-testid={`blog-card-summary-${strapiData.url}`}
                  className="fs-6 mb-1"
                >
                  {strapiData.blogPostSummary}
                </p>
              </Col>
            </Row>
            <Row className="mt-auto">
              <Col className="col-auto">
                <span
                  data-testid={`blog-card-published-time-${strapiData.url}`}
                  className="text-muted"
                >
                  {strapiData.publishedAt.split('T')[0]}
                </span>
              </Col>
              <Col className="col-auto">
                <span className="text-muted ">&#9679;</span>
              </Col>
              <Col>
                <span
                  data-testid={`blog-card-author-${strapiData.url}`}
                  className="text-muted"
                >
                  {strapiData.author}
                </span>
              </Col>
            </Row>
          </Container>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;

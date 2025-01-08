import React from 'react';
import { AccordionItem } from '../../../data/interfaces/our-work-page/OurWorkPageStrapiContent';
import { Accordion, Image, Nav } from 'react-bootstrap';
import './ourWorkPageAccordionItem.scss';

type Props = {
  accordionItemData: AccordionItem;
  accordionItemDataIndex: number;
};

const OurWorkPageAccordionItem: React.FC<Props> = ({
  accordionItemData,
  accordionItemDataIndex,
}) => {
  return (
    <Accordion.Item
      data-testid="our-work-page-accordion-item"
      eventKey={accordionItemDataIndex.toString()}
    >
      <Accordion.Header>
        <h3
          data-testid="our-work-page-accordion-item-header"
          className="fs-5 fw-bolder mb-0"
        >
          {accordionItemData.title}
        </h3>
      </Accordion.Header>
      <Accordion.Body>
        <p data-testid="our-work-page-accordion-item-description">
          {accordionItemData.description}
        </p>
        <Nav.Link href={accordionItemData.linkSlug}>
          {accordionItemData.linkSlug}
          <Image
            loading="lazy"
            className="ms-2 mb-2"
            src={accordionItemData.linkIcon.data.attributes.url}
            alt={accordionItemData.linkIcon.data.attributes.alternativeText}
          />
        </Nav.Link>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default OurWorkPageAccordionItem;

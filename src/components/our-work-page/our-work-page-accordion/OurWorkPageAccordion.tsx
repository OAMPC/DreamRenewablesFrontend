import React from 'react';
import { AccordionItem } from '../../../data/interfaces/our-work-page/OurWorkPageStrapiContent';
import { Accordion } from 'react-bootstrap';
import OurWorkPageAccordionItem from '../our-work-page-accordion-item/OurWorkPageAccordionItem';
import styles from './ourWorkPageAccordion.module.scss';

type Props = {
  accordionData: Array<AccordionItem>;
};

const OurWorkPageAccordion: React.FC<Props> = ({ accordionData }) => {
  return (
    <Accordion
      className={styles.ourWorkPageAccordion}
      data-testid="our-work-page-accordion"
    >
      {accordionData.map((accordionItem, index) => (
        <OurWorkPageAccordionItem
          key={index}
          accordionItemData={accordionItem}
          accordionItemDataIndex={index}
        />
      ))}
    </Accordion>
  );
};

export default OurWorkPageAccordion;

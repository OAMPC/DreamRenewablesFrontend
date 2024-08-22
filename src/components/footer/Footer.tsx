import React, { useEffect, useState } from 'react';
import * as Bs from 'react-bootstrap';
import { getFooterStrapiData } from '../../api/strapiApi';
import { FooterStrapiContent } from '../../data/interfaces/footer/FooterStrapiContent';

const Footer: React.FC = () => {
  const [content, setData] = useState<FooterStrapiContent | null>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAndProcessData = async (): Promise<void> => {
      try {
        const apiResponse = await getFooterStrapiData();
        if (apiResponse) {
          setData(apiResponse);
        }
      } catch (error) {
        handleError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAndProcessData();
  }, []);

  const handleError = (error: unknown): void => {
    console.error('Error loading or parsing data:', error);
  };

  console.log(content);
  console.log(isLoading);

  return (
    <section>
      <footer>
        <hr />
        <Bs.Row>
          <Bs.Col lg="7" sm="12">
            <h1>Test</h1>
          </Bs.Col>
          <Bs.Col lg="2" sm="4">
            <h1>Test</h1>
          </Bs.Col>
          <Bs.Col lg="3" sm="8">
            <h1>Test</h1>
          </Bs.Col>
        </Bs.Row>
      </footer>
    </section>
  );
};

export default Footer;

import React, { useEffect, useState } from 'react';
import GetStrapiData from '../../api/api';

const LandingPage: React.FC = () => {
  const [data, setData] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAndProcessData = async (): Promise<void> => {
      try {
        const apiResponse = await GetStrapiData();
        if (apiResponse) {
          setData(apiResponse.data[0].attributes.helloWorldText);
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

  return (
    <>
      <h1>Hello World this is a Test!</h1>
      {!isLoading && <p>{data}</p>}
    </>
  );
};

export default LandingPage;

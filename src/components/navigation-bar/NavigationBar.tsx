import React, { useEffect, useState } from 'react';
import GetStrapiData from '../../api/api';
import { NavigationBarStrapiContent } from '../../data/interfaces/navigation-bar/NavigationBarStrapiContent';

const NavigationBar: React.FC = () => {
  const [content, setData] = useState<NavigationBarStrapiContent | null>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAndProcessData = async (): Promise<void> => {
      try {
        const apiResponse = await GetStrapiData();
        if (apiResponse) {
          console.log(apiResponse);

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

  return <section>{!isLoading && <>{content?.button.buttonString}</>}</section>;
};

export default NavigationBar;

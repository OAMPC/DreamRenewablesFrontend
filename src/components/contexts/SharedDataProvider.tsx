import React, { createContext, useContext, useState, useEffect } from 'react';
import { FooterStrapiContent } from '../../data/interfaces/footer/FooterStrapiContent';
import { NavigationBarStrapiContent } from '../../data/interfaces/navigation-bar/NavigationBarStrapiContent';
import {
  getFooterStrapiData,
  getNavigationBarStrapiData,
} from '../../api/strapiApi';
import Loading from '../loading/Loading';

type SharedData = {
  navigationBarContent?: NavigationBarStrapiContent;
  footerContent?: FooterStrapiContent;
};

export const SharedDataContext = createContext<SharedData | null>(null);

export const SharedDataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [sharedData, setSharedData] = useState<SharedData>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [navigationBarContent, footerContent] = await Promise.all([
          getNavigationBarStrapiData(),
          getFooterStrapiData(),
        ]);
        setSharedData({ navigationBarContent, footerContent });
      } catch (err) {
        console.error('Error fetching shared data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <Loading />;

  return (
    <SharedDataContext.Provider value={sharedData}>
      {children}
    </SharedDataContext.Provider>
  );
};

export const useSharedData = () => {
  const context = useContext(SharedDataContext);
  if (!context) {
    throw new Error('useSharedData must be used within a SharedDataProvider');
  }
  return context;
};

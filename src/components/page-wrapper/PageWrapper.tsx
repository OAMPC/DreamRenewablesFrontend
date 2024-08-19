import React, { ReactNode } from 'react';
import NavigationBar from '../navigation-bar/NavigationBar';

type Props = {
  children: ReactNode;
};

const PageWrapper: React.FC<Props> = ({ children }) => {
  return (
    <div tabIndex={-1} id="layout">
      <NavigationBar />
      <div>{children}</div>
    </div>
  );
};

export default PageWrapper;

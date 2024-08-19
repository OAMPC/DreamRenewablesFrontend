import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const PageWrapper: React.FC<Props> = ({ children }) => {
  return (
    <div tabIndex={-1} id="layout">
      <div>{children}</div>
    </div>
  );
};

export default PageWrapper;

import React from 'react';
import ErrorTemplatePage from '../error-template-page/ErrorTemplatePage';

const InternalErrorPage: React.FC = () => {
  return (
    <ErrorTemplatePage
      errorMessage={'ERROR 500: Sorry something went wrong on our side!'}
    />
  );
};

export default InternalErrorPage;

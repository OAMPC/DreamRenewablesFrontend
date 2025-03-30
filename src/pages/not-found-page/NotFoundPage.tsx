import React from 'react';
import ErrorTemplatePage from '../error-template-page/ErrorTemplatePage';

const NotFoundPage: React.FC = () => {
  return (
    <ErrorTemplatePage
      errorMessage={'ERROR 404: Sorry this page cannot be found'}
    />
  );
};

export default NotFoundPage;

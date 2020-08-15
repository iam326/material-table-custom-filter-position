import React from 'react';

import Filters from './Filters';
import DataTable from './DataTable';

const MainContent: React.FC = () => {
  return (
    <>
      <Filters />
      <DataTable />
    </>
  );
};

export default MainContent;

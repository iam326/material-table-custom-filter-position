import React, { useState } from 'react';

import Filters from './Filters';
import DataTable from './DataTable';

const MainContent: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  return (
    <>
      <Filters
        inputValue={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <DataTable filterValue={inputValue} />
    </>
  );
};

export default MainContent;

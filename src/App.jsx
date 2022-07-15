import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Layout } from './components/Layout';
import { MainBlock } from './pages/main';

export const App = () => {
   return (
      <Routes>
         <Route path='/' element={<Layout />}>
            <Route index element={<MainBlock />} />
         </Route>
      </Routes>
   );
};

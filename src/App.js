import { Routes, Route } from 'react-router-dom';

import Main from './Pages/Main';
import PageCard from './Pages/PageCard';

import './Utility/general.scss';


function App({id}) {

return (

    <div className="container">

    <Routes basename="/citta-del-mondo">
      <Route path="" element={<Main />} />
      <Route path={`/card/${id}`} element={<PageCard />} />
    </Routes>
      
    </div>
  );
}


export default App;

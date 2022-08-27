import { Route, Routes } from 'react-router-dom';
import {
  Header,
  AllTasks,
  OpenedTasks,
  ClosedTasks
} from './components';

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/'>
          <Route index element={<AllTasks />} />
          <Route path="opened" element={<OpenedTasks />} />
          <Route path="closed" element={<ClosedTasks />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

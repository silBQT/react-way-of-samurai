import { Route, Routes } from 'react-router-dom';
import Profile from './pages/Profile/Profile';
import DialogsContainer from './pages/Dialogs/DialogsContainer';
import Notfoundpage from './pages/Notfoundpage/Notfoundpage';
import { Layout } from './components/Layout';

function App(props) {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Profile />} />
          <Route path="dialogs" element={<DialogsContainer />} />
          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

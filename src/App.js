import { Route, Routes } from 'react-router-dom';
import Profile from './pages/Profile/Profile';
import DialogsContainer from './pages/Dialogs/DialogsContainer';
import Notfoundpage from './pages/Notfoundpage/Notfoundpage';
import { Layout } from './components/Layout';
import UsersContainer from './pages/Users/UsersContainer';

function App(props) {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Profile />} />
          <Route path="dialogs" element={<DialogsContainer />} />
          <Route path="users" element={<UsersContainer />} />
          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import DialogsContainer from './pages/Dialogs/DialogsContainer';
import Notfoundpage from './pages/Notfoundpage/Notfoundpage';
import { Layout } from './components/Layout';
import UsersContainer from './pages/Users/UsersContainer';
import ProfileContainer from './pages/Profile/ProfileContainer';
import Login from './pages/Login/Login';

function App(props) {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/profile/:userId?" element={<ProfileContainer />} />
          <Route path="/dialogs/*" element={<DialogsContainer />} />
          <Route path="/users" element={<UsersContainer />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

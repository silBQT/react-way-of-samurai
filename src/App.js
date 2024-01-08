import { Route, Routes } from 'react-router-dom';
import Profile from './pages/Profile/Profile';
import Dialogs from './pages/Dialogs/Dialogs';
import Notfoundpage from './pages/Notfoundpage/Notfoundpage';
import { Layout } from './components/Layout';

function App(props) {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout state={props.state.layout} />}>
          <Route index element={<Profile state={props.state.profilePage} dispatch={props.dispatch} />} />
          <Route path="dialogs" element={<Dialogs state={props.state.dialogsPage} dispatch={props.dispatch} />} />
          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

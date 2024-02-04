import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import UsersContainer from './pages/Users/UsersContainer';
import Notfoundpage from './pages/Notfoundpage/Notfoundpage'
import React, { Suspense } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { inizializeApp } from './redux/app-reducer'
import withRouter from './withRouter';
import Preloader from './pages/common/Preloader/Preloader';
const DialogsContainer = React.lazy(() => import('./pages/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./pages/Profile/ProfileContainer'));
const LoginContainer = React.lazy(() => import('./pages/Login/LoginContainer'));

class App extends React.Component {

  componentDidMount() {
    this.props.inizializeApp();
  }

  render() {
    if (!this.props.inizializated) return <Preloader />
    return (
      <Suspense fallback={<div><Preloader /></div>}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/profile/:userId?" element={<ProfileContainer />} />
            <Route path="/dialogs/*" element={<DialogsContainer />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/login" element={<LoginContainer />} />
            <Route path="*" element={<Notfoundpage />} />
          </Route>
        </Routes>
      </Suspense>
    );
  }
}

const mapStateToProps = (state) => ({
  inizializated: state.app.inizializated
})

export default compose(
  connect(mapStateToProps, { inizializeApp }),
  withRouter
)(App);

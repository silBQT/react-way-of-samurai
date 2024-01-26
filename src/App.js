import { Route, Routes } from 'react-router-dom';
import DialogsContainer from './pages/Dialogs/DialogsContainer';
import Notfoundpage from './pages/Notfoundpage/Notfoundpage';
import { Layout } from './components/Layout';
import UsersContainer from './pages/Users/UsersContainer';
import ProfileContainer from './pages/Profile/ProfileContainer';
import LoginContainer from './pages/Login/LoginContainer';
import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { inizializeApp } from './redux/app-reducer'
import withRouter from './withRouter';
import Preloader from './pages/common/Preloader/Preloader';

class App extends React.Component {

  componentDidMount() {
    this.props.inizializeApp();
  }

  render() {
    if (!this.props.inizializated) return <Preloader />
    return (
      <>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/profile/:userId?" element={<ProfileContainer />} />
            <Route path="/dialogs/*" element={<DialogsContainer />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/login" element={<LoginContainer />} />
            <Route path="*" element={<Notfoundpage />} />
          </Route>
        </Routes>
      </>
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

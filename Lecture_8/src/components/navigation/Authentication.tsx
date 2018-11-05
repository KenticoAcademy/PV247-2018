import * as React from 'react';
import * as ReactModal from 'react-modal';
import {Route, RouteComponentProps} from 'react-router-dom';
import {authenticationStore} from '../../utils/authenticationStore';

class AuthenticationDialog extends React.PureComponent<RouteComponentProps> {
  static displayName = 'AuthenticationDialog';

  private navigateBack = (redirectionOrigin: RedirectionOrigin) => {
    const {history} = this.props;
    const state = history.location.state;

    // case when redirection from secured path occurred and user is not authenticated
    if (redirectionOrigin === RedirectionOrigin.authentication && state && state.from) {
      history.push(state.from);
      return;
    }

    // case when redirection from secured path occurred but user closed dialog or anonymized themselves.
    if (redirectionOrigin !== RedirectionOrigin.authentication && state && state.requiresAuth) {
      history.push('/');
      return;
    }

    // case when /auth was accessed directly by user entering address (e.g. in a new tab)
    if (!history.location.key) {
      history.push('/');
      return;
    }

    // case when no redirection occurred and route was access via SPA
    history.goBack();
  };

  private closeDialog = () => this.navigateBack(RedirectionOrigin.dismissal);

  private anonymizeAndClose = () => {
    authenticationStore.anonymize();
    this.navigateBack(RedirectionOrigin.anonymization);
  };

  private authenticateAndClose = () => {
    authenticationStore.authenticate();
    this.navigateBack(RedirectionOrigin.authentication);
  };

  render() {
    return (
      <ReactModal
        isOpen
        shouldCloseOnEsc
        shouldCloseOnOverlayClick
        contentLabel="Profile"
        style={customStyles}
        onRequestClose={this.closeDialog}
      >
        <div className="text-center">
          <img src="/images/you.png"/>

          {authenticationStore.isAuthenticated
            ? <AnonymizationForm onClick={this.anonymizeAndClose}/>
            : <AuthenticationForm onClick={this.authenticateAndClose}/>}
        </div>
      </ReactModal>
    );
  }
}

interface FormWithButton {
  readonly onClick: () => void;
}

const AuthenticationForm: React.StatelessComponent<FormWithButton> = ({onClick}) => (
  <div className="row">
    <div className="col-sm-offset-3 col-sm-6 form-group">
      <div className="input-group input-group-lg">
        <span className="input-group-addon alert-success">
          <span className="glyphicon glyphicon-hand-right"/>
        </span>
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          value="SuperSecretPassword"
          readOnly
        />
      </div>
    </div>


    <div className="col-sm-offset-4 col-sm-4 text-center">
      <button
        className="btn btn-success btn-block btn-lg"
        onClick={onClick}
      >
        Authenticate
      </button>

    </div>
  </div>
);

AuthenticationForm.displayName = 'AuthenticationForm';

const AnonymizationForm: React.StatelessComponent<FormWithButton> = ({onClick}) => (
  <div className="text-center">
    <br/>
    <br/>
    <br/>

    <button
      className="btn btn-danger btn-lg"
      onClick={onClick}
    >
      Anonymize
    </button>

  </div>
);

AnonymizationForm.displayName = 'AnonymizationForm';

const customStyles: ReactModal.Styles = {
  content: {
    top: '30%',
    left: '40%',
    right: 'auto',
    height: '60%',
    width: '40%',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-25%, -25%)',
    overflow: 'hidden',
  },
  overlay: {
    zIndex: 2500,
    backgroundColor: '#5bc0dee5'
  }
};

enum RedirectionOrigin {
  dismissal = 'dismissal',
  authentication = 'authentication',
  anonymization = 'anonymization',
}

export const Authentication: React.StatelessComponent = () => (
  <Route
    path="/Auth"
    component={AuthenticationDialog}
  />
);

Authentication.displayName = 'Authentication';

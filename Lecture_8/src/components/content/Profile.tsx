import * as React from 'react';
import {authenticationStore} from '../../utils/authenticationStore';

export const Profile: React.StatelessComponent = () => (
  <>
    <div className="form-group">
      <div className="input-group input-group-lg">
                <span className="input-group-addon alert-info">
                  <span className="glyphicon glyphicon-user"/>
                </span>
        <input
          type="text"
          className="form-control"
          placeholder="Full name"
          value={authenticationStore.fullName}
          readOnly
        />
      </div>
    </div>

    <div className="form-group">
      <div className="input-group input-group-lg">
                <span className="input-group-addon alert-info">
                  <span className="glyphicon glyphicon-envelope"/>
                </span>
        <input
          type="text"
          className="form-control"
          placeholder="E-mail"
          value={authenticationStore.email}
          readOnly
        />
      </div>
    </div>

    <div className="form-group">
      <div className="input-group input-group-lg">
                <span className="input-group-addon alert-info">
                  <span className="glyphicon glyphicon-home"/>
                </span>
        <input
          type="text"
          className="form-control"
          placeholder="Address"
          value={authenticationStore.address}
          readOnly
        />
      </div>
    </div>
  </>
);

Profile.displayName = 'Profile';

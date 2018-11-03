import * as React from 'react';
import {Route} from 'react-router-dom';
import {TextWithLinks} from './parametersRouting/TextWithLinks';
import {RouteContains} from './parametersRouting/RouteContains';
import {ContSentence, ExtSentence, UalSentence} from './parametersRouting/Senteces';
import {ContextualRouteInfo} from './parametersRouting/ContextualRouteInfo';
import {Article} from './parametersRouting/Article';

export const ParameterRoutes: React.StatelessComponent = () => (
  <>
    <TextWithLinks/>

    <p>
      <RouteContains
        substring="cont"
        component={ContSentence}
      />
      <RouteContains
        substring="ext"
        component={ExtSentence}
      />
      <RouteContains
        substring="ual"
        component={UalSentence}
      />
    </p>
    <ContextualRouteInfo/>

    <Route exact path="/article/:title" component={Article}/>
    <Route path="/article/:title/section/:section/:highlight?" component={Article}/>
  </>
);

ParameterRoutes.displayName = 'ParameterRoutes';

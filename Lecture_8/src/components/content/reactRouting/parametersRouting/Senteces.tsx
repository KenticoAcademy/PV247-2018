import * as React from 'react';

export const ContSentence: React.StatelessComponent = () => (
  <>
    Don't be just a <span className="text-info">cont</span>
  </>
);

ContSentence.displayName = 'ContSentence';

export const ExtSentence: React.StatelessComponent = () => (
  <>
    <span className="text-danger">ext</span>-agnostic
  </>
);

ExtSentence.displayName = 'ExtSentence';

export const UalSentence: React.StatelessComponent = () => (
  <>
    &nbsp;Turing machine (Type-2) – be something unus<span className="text-success">ual</span> (Helicopter)
  </>
);

UalSentence.displayName = 'UalSentence';

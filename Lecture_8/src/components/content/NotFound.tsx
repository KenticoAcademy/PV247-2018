import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const HOME = '%HOME%';
const URL = '%URL%';

const quotes = [
  ['Unfortunately in today’s world a ', HOME, ' seems to be more reliable than a truthful honest ', URL, '.'],
  ['The ', URL, ' only comes to life in our imaginations. Unfortunately for ', HOME, ', You\'ve got a very vivid imagination.'],
  ['I gradually fell from ', HOME, '; alas, you dove in ', URL, '!'],
  ['Unfortunately, ', URL, ' makes you happy - look around then say ', HOME, '!'],
  ['I wish that I had \'', URL, '\', but unfortunately for you and your family, I only have \'', HOME, '\'.'],
  ['Instead of the ', URL, ' to be a place for eradicating darkness by beaming out light, she has unfortunately become the den of robbers as ', HOME, ' would put it.'],
];

const selectQuote = (): string[] => {
  const quoteIndex = Math.floor(Math.random() * 10) % quotes.length;

  return quotes[quoteIndex];
};

const renderQuotePart = (quotePart: string, missingUrl: string): JSX.Element => {
  switch (quotePart) {
    case HOME:
      return <Link key={quotePart} to="/">link to home</Link>;

    case URL:
      return <Link key={quotePart} to={missingUrl}>link to "{missingUrl}"</Link>;

    default:
      return <span key={quotePart}>{quotePart}</span>;
  }
};

interface NotFoundProps {
  readonly match: {
    readonly url: string;
  };
}

export const NotFound: React.StatelessComponent<NotFoundProps> = ({match}) => (
  <>
    <h2>Page not found &#x2639;</h2>
    <br />
    <p>
      {selectQuote().map(quotePart => renderQuotePart(quotePart, match.url))}
    </p>
  </>
);

NotFound.displayName = 'NotFound';

NotFound.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired
  }).isRequired,
};

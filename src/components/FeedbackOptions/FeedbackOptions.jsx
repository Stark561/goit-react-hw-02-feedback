import PropTypes from 'prop-types';

import { List, Button } from './FeedbackOptions.styles';

export function FeedbackOptions({ increment }) {
  return (
    <>
      <List>
        <li>
          <Button onClick={() => increment('good')}>Good</Button>
        </li>
        <li>
          <Button onClick={() => increment('neutral')}>Neutral</Button>
        </li>
        <li>
          <Button onClick={() => increment('bad')}>Bad</Button>
        </li>
      </List>
    </>
  );
}

FeedbackOptions.propTypes = {
  increment: PropTypes.func.isRequired,
};
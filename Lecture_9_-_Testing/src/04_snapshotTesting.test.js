import React from 'react';
import renderer from 'react-test-renderer';
import { Button } from "./04_snapshotTesting";

describe('Button', () => {
  test('shows saving when saving in progress', () => {
    const tree = renderer
      .create(<Button
        onClick={() => { /* no-op */
        }}
        isSaving
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

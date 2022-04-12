import { screen, render } from '@testing-library/react';

import Component from './';

describe('<Dummy>', () => {
  const defaultValues = {};
  it('should render', () => {
    render(<Component {...defaultValues} />);

    expect(Component).toBeTruthy();
  });
});

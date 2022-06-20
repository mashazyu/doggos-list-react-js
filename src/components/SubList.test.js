import { render, screen } from '@testing-library/react';
import SubList from './SubList';

describe('SubList', () => {
  it('if provided full data, renders all fields', () => {
    const data = [{
      guid: 'guid',
      name: 'name',
      country: 'country',
      company: 'company',
      image: 'image.url'
    }];

    render(<SubList data={data} />);

    expect(screen.getByText(/name/i)).toBeInTheDocument();
    expect(screen.getByText(/country/i)).toBeInTheDocument();
    expect(screen.getByText(/company/i)).toBeInTheDocument();
  });
});

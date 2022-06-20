import { render, screen, waitFor } from '@testing-library/react';
import { DataContextProvider } from '../contexts/DataContext';
import SectionedList from './SectionedList';

describe('SectionedList', () => {
  it('if data is provided, renders it', async () => {
    render(
      <DataContextProvider>
        <SectionedList grouping="company" filter="" />
      </DataContextProvider>
    );

    await waitFor(() => {
      expect(screen.getAllByText(/doggo/i).length).toBe(50);
      expect(screen.getAllByText(/manages stress/i).length).toBe(50);
    });
  });
});

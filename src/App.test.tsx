import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { App } from './App';
import { campaignContent } from './content/campaignContent';

describe('Anyone But Gray single-page site', () => {
  it('uses the shared Anyone But Gray content', () => {
    expect(campaignContent.candidate.name).toBe('Anyone But Gray');
    expect(campaignContent.election.date).toBe('August 6, 2026');
    expect(campaignContent.launchReadiness.disclaimerConfirmed).toBe(false);
  });

  it('renders the homepage as the only campaign page', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { name: /Anyone But Gray/i })).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /Vote Info/i })).toContainEqual(
      expect.objectContaining({ href: expect.stringContaining('#vote-info') })
    );
    expect(screen.getAllByText(/Independent voter information/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/confirm before launch/i)).toBeInTheDocument();
    expect(screen.queryByLabelText(/Theme preview routes/i)).not.toBeInTheDocument();
  });

  it('redirects legacy routes back to the single page', () => {
    render(
      <MemoryRouter initialEntries={['/old-review-route']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { name: /Anyone But Gray/i })).toBeInTheDocument();
    expect(screen.queryByLabelText(/Theme preview routes/i)).not.toBeInTheDocument();
  });

  it('scrolls to hash sections after the single page renders', async () => {
    const scrollIntoView = vi.fn();
    Element.prototype.scrollIntoView = scrollIntoView;

    render(
      <MemoryRouter initialEntries={['/#vote-info']}>
        <App />
      </MemoryRouter>
    );

    await vi.waitFor(() => {
      expect(scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth', block: 'start' });
    });
  });
});

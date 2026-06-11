import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { App } from './App';
import { campaignContent } from './content/campaignContent';
import { themeRoutes } from './themes/themeRegistry';

describe('campaign preview site', () => {
  it('defines five named review themes with distinct layouts from shared content', () => {
    expect(themeRoutes.map((theme) => theme.slug)).toEqual([
      'modern-civic',
      'patriotic-classic',
      'warm-local',
      'courthouse-ledger',
      'river-county'
    ]);
    expect(new Set(themeRoutes.map((theme) => theme.layout)).size).toBe(themeRoutes.length);
    expect(campaignContent.candidate.name).toBe('Anyone But Gray');
    expect(campaignContent.election.date).toBe('August 6, 2026');
    expect(campaignContent.launchReadiness.disclaimerConfirmed).toBe(false);
  });

  it('renders the selected theme route with the vote-info call to action', () => {
    render(
      <MemoryRouter initialEntries={['/patriotic-classic']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { name: /Anyone But Gray/i })).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /Vote Info/i })).toContainEqual(
      expect.objectContaining({ href: expect.stringContaining('#vote-info') })
    );
    expect(screen.getAllByText(/Independent voter information/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/confirm before launch/i)).toBeInTheDocument();
  });

  it('defaults the homepage to Modern Civic for review', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByTestId('active-theme')).toHaveTextContent('Modern Civic');
  });

  it.each(themeRoutes)('renders the $label preview route', (theme) => {
    render(
      <MemoryRouter initialEntries={[theme.route]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByTestId('active-theme')).toHaveTextContent(theme.label);
    expect(screen.getByTestId('layout-kind')).toHaveTextContent(theme.layoutLabel);
    expect(screen.getByText(theme.tone)).toBeInTheDocument();
  });

  it('scrolls to hash sections after route render', async () => {
    const scrollIntoView = vi.fn();
    Element.prototype.scrollIntoView = scrollIntoView;

    render(
      <MemoryRouter initialEntries={['/modern-civic#vote-info']}>
        <App />
      </MemoryRouter>
    );

    await vi.waitFor(() => {
      expect(scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth', block: 'start' });
    });
  });
});

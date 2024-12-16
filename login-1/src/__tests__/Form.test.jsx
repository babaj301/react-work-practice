import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, beforeAll } from 'vitest';
import { MemoryRouter, Routes, Route, useLocation } from 'react-router-dom';
import Form from '../containers/Form';
import LandingPage from '../pages/LandingPage';
import Login1 from '../pages/Login1';

// Helper component to access current location

beforeAll(() => {
  window.matchMedia =
    window.matchMedia ||
    function () {
      return {
        matches: false,
        addListener: function () {},
        removeListener: function () {},
        addEventListener: function () {},
        removeEventListener: function () {},
        dispatchEvent: function () {},
      };
    };
});
const TestComponent = ({ setLocation }) => {
  const location = useLocation();
  setLocation(location);
  return null;
};

describe('renders form', () => {
  it('checks if button is rendered ', () => {
    render(
      <MemoryRouter>
        <Form />
      </MemoryRouter>
    );
    expect(screen.getByTestId('submit')).toBeInTheDocument();
  });

  it('checks if input is rendered ', () => {
    render(
      <MemoryRouter>
        <Form />
      </MemoryRouter>
    );
    expect(screen.getByTestId('email')).toBeInTheDocument();
    expect(screen.getByTestId('password')).toBeInTheDocument();
  });

  it('submit form on click of button', async () => {
    let testLocation;
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Login1 />} />
          <Route path="/landing" element={<LandingPage />} />
        </Routes>
        <TestComponent
          setLocation={(location) => {
            testLocation = location;
          }}
        />
      </MemoryRouter>
    );

    const button = screen.getByTestId('submit');
    await userEvent.click(button);

    await waitFor(() => {
      expect(testLocation.pathname).toBe('/');
    });
  });
});

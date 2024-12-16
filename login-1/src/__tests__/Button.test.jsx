import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Button from '../components/Button';
describe('renders button', () => {
  it('renders hello world', () => {
    render(<Button text={'hello'} />);
    expect(screen.getByText('hello')).toBeInTheDocument();
  });
});

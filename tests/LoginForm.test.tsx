import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from '../src/components/LoginForm';

describe('LoginForm', () => {
  it('renders and submits with valid input', () => {
    const onLogin = jest.fn();
    render(<LoginForm onLogin={onLogin} />);
    const input = screen.getByLabelText(/nickname/i);
    fireEvent.change(input, { target: { value: 'Owais' } });
    fireEvent.click(screen.getByRole('button', { name: /login/i }));
    expect(onLogin).toHaveBeenCalledWith('Owais');
  });

  it('shows error on empty submit', () => {
    const onLogin = jest.fn();
    render(<LoginForm onLogin={onLogin} />);
    fireEvent.click(screen.getByRole('button', { name: /login/i }));
    expect(screen.getByRole('alert')).toHaveTextContent(/please enter your name/i);
    expect(onLogin).not.toHaveBeenCalled();
  });
});

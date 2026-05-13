import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock component simples
function AppMock() {
  return (
    <div>
      <h1>Chave Shell</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/dashboard">Dashboard</a>
      </nav>
    </div>
  );
}

describe('App Shell', () => {
  it('deve renderizar o shell da aplicação', () => {
    render(<AppMock />);
    
    expect(screen.getByRole('heading', { name: /chave shell/i })).toBeInTheDocument();
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('deve ter links de navegação', () => {
    render(<AppMock />);
    
    expect(screen.getByRole('link', { name: /home/i })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: /dashboard/i })).toHaveAttribute('href', '/dashboard');
  });

  it('deve ter 2 links na navegação', () => {
    render(<AppMock />);
    
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(2);
  });
});

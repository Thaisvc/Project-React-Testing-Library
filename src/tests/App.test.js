import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../components/renderWithRouter';

describe('Teste se o topo da aplicação contém um conjunto fixo de links de navegação',
  () => {
    it('Verifica se O primeiro link  possui o texto Home', () => {
      renderWithRouter(<App />);
      const home = screen.getByRole('link', { name: /home/i });

      expect(home).toBeInTheDocument();

      userEvent.click(home);
      const text = screen.getByRole('heading', { name: /encountered pokémons/i });

      expect(text).toBeInTheDocument();
    });

    it('Verifica se O segundo link  possui o texto About', () => {
      renderWithRouter(<App />);
      const about = screen.getByRole('link', { name: /about/i });

      expect(about).toBeInTheDocument();

      userEvent.click(about);
      const text = screen.getByRole('heading', { name: /about pokédex/i });

      expect(text).toBeInTheDocument();
    });

    it('Verifica se O terceiro link  possui o texto Favorite Pokémons', () => {
      renderWithRouter(<App />);
      const favorite = screen.getByRole('link', { name: /favorite/i });

      expect(favorite).toBeInTheDocument();

      userEvent.click(favorite);
      const text = screen.getByRole('heading', { name: /favorite pokémons/i });

      expect(text).toBeInTheDocument();
    });
  });

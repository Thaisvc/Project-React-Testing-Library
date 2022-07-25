import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Teste o componente <FavoritePokemons.js />', () => {
  it('Teste se é exibida na tela a mensagem No favorite pokemon found, ',
    () => {
      const { history } = renderWithRouter(<App />);
      history.push('/favorites');
      const textMensg = screen.getByText(/no favorite pokemon found/i);
      expect(textMensg).toBeInTheDocument();
    });

  it('Teste se são exibidos todos os cards de pokémons favoritados.', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/pokemons/78');
    const checkedFav = screen.getByLabelText(/pokémon favoritado/i);
    expect(checkedFav).toBeInTheDocument();
    userEvent.click(checkedFav);
    history.push('/pokemons/65');

    expect(checkedFav).toBeInTheDocument();
    userEvent.click(checkedFav);
    history.push('/favorites');
    const cards = screen.getAllByRole('link', { name: /more details/i });
    expect(cards).toHaveLength(2);
  });
});

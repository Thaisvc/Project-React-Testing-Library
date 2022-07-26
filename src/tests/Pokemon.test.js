import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';
import pokemons from '../data';

describe('Teste o componente <Pokemon.js />', () => {
  const { name, type, averageWeight: { value, measurementUnit },
    image, id } = pokemons[0];

  it('Teste se é renderizado um card com as informações de determinado pokémon', () => {
    renderWithRouter(<App />);
    const pokemonName = screen.getByTestId('pokemon-name');
    const pokemonType = screen.getByTestId('pokemon-type');
    const pokemonWeight = screen.getByTestId('pokemon-weight');
    const pokemonImg = screen.getByAltText(`${name} sprite`);
    expect(pokemonName).toHaveTextContent(name);
    expect(pokemonType).toHaveTextContent(type);
    expect(pokemonWeight).toHaveTextContent(`${value} ${measurementUnit}`);
    expect(pokemonImg.src).toBe(image);
  });

  // Teste se o card do pokémon indicado na Pokédex contém um link de navegação para exibir detalhes deste pokémon. O link deve possuir a URL /pokemons/<id>, onde <id> é o id do pokémon exibido;
  it('Teste se o card do pokémon contém um link de navegação para exibir detalhes .',
    () => {
      const { history } = renderWithRouter(<App />);
      const detailLinkPokemon = screen.getByRole('link', { name: /more details/i });
      expect(detailLinkPokemon).toBeInTheDocument();
      userEvent.click(detailLinkPokemon);
      expect(history.location.pathname).toBe(`/pokemons/${id}`);
    });

  it('Teste se existe um ícone de estrela nos pokémons favoritados', () => {
    const { history } = renderWithRouter(<App />);
    history.push(`/pokemons/${id}`);

    const favoritePokemon = screen.getByLabelText(/pokémon favoritado/i);
    userEvent.click(favoritePokemon);
    const iconFavorite = screen.getByAltText(`${name} is marked as favorite`);
    expect(iconFavorite.src).toContain('/star-icon.svg');
  });
});

import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Teste o componente <Pokedex.js />', () => {
  it('Teste se a página contém um heading h2 com o texto Encountered pokémons', () => {
    renderWithRouter(<App />);
    const heading = screen.getByRole('heading', { name: /encountered pokémons/i });
    expect(heading).toBeInTheDocument();
  });

  it('Teste se é exibido o próximo pokémon quando o botão Próximo pokémon é clicado',
    () => {
      renderWithRouter(<App />);
      const pokemonName = screen.getByTestId('pokemon-name');
      expect(pokemonName).toBeInTheDocument();
      expect(pokemonName).toHaveTextContent(/pikachu/i);

      const pokemonNextBtn = screen.getByTestId(/next-pokemon/);
      userEvent.click(pokemonNextBtn);
      expect(pokemonName).toBeInTheDocument();
      expect(pokemonName).toHaveTextContent(/charmander/i);
    });

  it('Teste se é mostrado apenas um pokémon por vez', () => {
    renderWithRouter(<App />);
    const pokemons = screen.getAllByTestId('pokemon-name');
    expect(pokemons[0]).toBeInTheDocument();
    expect(pokemons).toHaveLength(1);
  });

  it('Teste se a Pokédex tem os botões de filtro', () => {
    renderWithRouter(<App />);
    const pokemonFilter = ['Electric', 'Fire', 'Bug', 'Poison', 'Psychic',
      'Normal', 'Dragon'];

    pokemonFilter.forEach((pokemon) => {
      const button = screen.getByRole('button', { name: pokemon });
      expect(button).toBeInTheDocument();
    });
  });

  // A partir da seleção de um botão de tipo, a Pokédex deve circular somente pelos pokémons daquele tipo;
  it('A partir da seleção do botão a Pokédex circular  pelos pokémons daquele tipo',
    () => {
      renderWithRouter(<App />);
      const btnElectric = screen.getByRole('button', { name: /psychic/i });
      const pokemonType = screen.getByTestId('pokemon-type');
      userEvent.click(btnElectric);
      expect(pokemonType).toHaveTextContent(/psychic/i);

      const buttonNext = screen.getByTestId(/next-pokemon/);
      userEvent.click(buttonNext);
      expect(pokemonType).toHaveTextContent(/psychic/i);
    });

  it('O botão All precisa estar sempre visível.', () => {
    renderWithRouter(<App />);
    const btnAll = screen.getByRole('button', { name: /all/i });
    expect(btnAll).toBeInTheDocument();
  });

  it('Teste se a Pokédex contém um botão para resetar o filtro:', () => {
    renderWithRouter(<App />);

    const btnTypePokemon = screen.getAllByTestId('pokemon-type-button');
    const btnAllPokemon = screen.getByRole('button', { name: /all/i });
    userEvent.click(btnTypePokemon[0]);
    userEvent.click(btnAllPokemon);
    const buttonNext = screen.getByTestId(/next-pokemon/);
    const pokemonType = screen.getByTestId('pokemon-type');
    expect(pokemonType).toHaveTextContent(/electric/i);
    userEvent.click(buttonNext);
    expect(pokemonType).not.toHaveTextContent(/electric/i);
  });
});

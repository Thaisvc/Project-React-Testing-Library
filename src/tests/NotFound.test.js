import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import NotFound from '../pages/NotFound';

describe(' Teste o componente <NotFound.js />', () => {
  test('Teste se a página contém um heading h2 com o texto Page requested not found ',
    () => {
      renderWithRouter(<NotFound />);
      const headingText = screen.getByRole('heading', { name: /page requested not/i });
      expect(headingText).toBeInTheDocument();
    });

  test('Teste se a página mostra a imagem https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif', () => {
    renderWithRouter(<NotFound />);
    const imgText = 'Pikachu crying because the page requested was not found';
    const image = screen.getByAltText(imgText);
    expect(image.src).toContain('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});

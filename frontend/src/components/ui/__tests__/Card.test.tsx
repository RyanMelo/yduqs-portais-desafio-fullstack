import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Card from '../Card';
import { Course } from '@/types/Courses';

const mockCourseInPerson: Course = {
  id: '1',
  modality: 'INPERSON',
  round: 'Manhã',
  cardType: 'WithPrice',
  discountPrice: '1000',
  installments: '12',
  installmentsPrice: '80',
  spotPrice: '900',
  address: 'Faculdade de Teste',
  street: '123 Rua de teste',
  description: '',
};

describe('Card component', () => {
  it('should be renders INPERSON course card correctly', () => {
    const handleClick = jest.fn();
    render(<Card course={mockCourseInPerson} onClick={handleClick} />);

    expect(screen.getByText('Presencial')).toBeInTheDocument();
    expect(screen.getByText('Manhã')).toBeInTheDocument();

    const priceElement = screen.getByText((content, element) => {
      return (
        element?.tagName.toLowerCase() === 'p' &&
        content.startsWith('De') && content.endsWith('por até')
      );
    });
    expect(priceElement).toBeInTheDocument();

    expect(screen.getByText('12x')).toBeInTheDocument();
    expect(screen.getByText('R$ 80')).toBeInTheDocument();
    expect(screen.getByText('à vista R$ 900')).toBeInTheDocument();

    expect(screen.getByText('Faculdade de Teste')).toBeInTheDocument();
    expect(screen.getByText('123 Rua de teste')).toBeInTheDocument();

    const button = screen.getByRole('button', { name: /Avançar/i });
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

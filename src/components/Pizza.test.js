import {screen, render, getAllByText, getAllByTestId} from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Pizza from './Pizza';

test('Est-ce que le nombre de pizzas affichées au départ correspond au nombre de pizzas dans le tableau', () => {
    render(<Pizza/>);

    const pizzaAffichees = screen.getAllByTestId('pizzaSaved');
    expect(pizzaAffichees.length).toBe(3);
});
test('Est-ce que bouton denregistrement est cliquable dès le départ, après avoir inscrit un nom et après avoir sélectionné au moins un ingrédient?', () => {
    render(<Pizza/>);

    const bouton = screen.getByTestId('bouton_sauvegarde');
    expect(bouton).toBeDisabled();
    
    const nomInput = screen.getByTestId('nom');
    userEvent.type(nomInput, "teste");
    expect(bouton).toBeDisabled();
    
    const checkbox = screen.getAllByTestId('check_box');
    userEvent.click(checkbox[0]);
    expect(bouton).not.toBeDisabled();
});
test('Est-ce que la pizza sajoute à la liste une fois le formulaire soumis', () => {
    render(<Pizza/>);
    
    const nomInput = screen.getByTestId('nom');
    userEvent.type(nomInput, "Pizza 4");
    
    const checkbox = screen.getAllByTestId('check_box');
    userEvent.click(checkbox[0]);
    
    const bouton = screen.getByTestId('bouton_sauvegarde');
    userEvent.click(bouton)

    const pizzaAffichees = screen.getAllByTestId('pizzaSaved');
    expect(pizzaAffichees.length).toBe(4)
});
test('Est-ce que le formulaire a bien été réinitialisé', () => {
    render(<Pizza/>);
    
    const nomInput = screen.getByTestId('nom');
    userEvent.type(nomInput, "Pizza 4");
    
    const checkbox = screen.getAllByTestId('check_box');
    userEvent.click(checkbox[0]);
    
    const bouton = screen.getByTestId('bouton_reinitialise');
    userEvent.click(bouton)

    expect(nomInput).toHaveValue("")
    expect(checkbox).not.toBeChecked;
});
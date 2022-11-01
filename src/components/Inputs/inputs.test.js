import React, { useState } from 'react';
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
// Importing the jest testing library
import '@testing-library/jest-dom'
import { TextInput, TextInputWithHorizontalLabel } from "./TextInput";
import { SelectInput } from './SelectInput'

// afterEach function runs after each test suite is executed
afterEach(() => {
    cleanup(); // Resets the DOM after each test suite
})

function Input() {
    return <TextInput />
}

function TextHorizontal() {
    return <TextInputWithHorizontalLabel />
}
function Select() {
    const testArray = [
        {
            id: 1,
            name: '',
            value: ''
        },
        {
            id: 2,
            name: 'TODOS',
            value: 'TODOS'
        },
        {
            id: 3,
            name: 'FISICO',
            value: 'FISICO'
        },
        {
            id: 4,
            name: 'JURIDICO',
            value: 'JURIDICO'
        }
    ]
    return <SelectInput dataOptions={testArray} />
}

describe("Text Component", () => {

    // Test 1
    test("TextInput", () => {
        render(<Input />); // Rendering the TextInput
        const userKey = screen.getByTestId("textbox");
        expect(userKey).toBeInTheDocument();

    })

    // Test 2
    test('value change', () => {
        const { getByDisplayValue } = render(<Input />); // Rendering the TextInput
        const input = getByDisplayValue('')
        fireEvent.change(input)

    })

    // Test 3
    test('Horizontal input value change', () => {
        const { getByDisplayValue } = render(<TextHorizontal />)
        const input = getByDisplayValue('')
        fireEvent.change(input)

    })

    // Test 4
    test('should display the correct number of options', () => {
        render(<Select />)

        expect(screen.getAllByRole('option').length).toBe(4)


    })
    
    // Test 5
    test('should correctly set default option', () => {
        render(<Select />)
        expect(screen.getByRole('option', { name: '' }).selected).toBe(true)
    })


})

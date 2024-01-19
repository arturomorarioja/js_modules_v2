import { persons } from './personsInfo.mjs';
import { formatDate } from './utils.mjs';

/**
 * Creates a person <article> template to be cloned for each person
 * @returns The <article> template
 */
const createPersonTemplate = () => {
    const template = document.createElement('article');
    
    const name = document.createElement('div');
    name.classList.add('name');

    const birthDate = document.createElement('div');
    birthDate.classList.add('date');

    const salary = document.createElement('div');
    salary.classList.add('salary');

    template.appendChild(name);
    template.appendChild(birthDate);
    template.appendChild(salary);

    return template;
}
const personTemplate = createPersonTemplate();

/**
 * Formats person information
 * @param {*} a person object
 * @returns An <article> with formatted information about the person
 */
const formatPerson = (personData) => {
    const person = personTemplate.cloneNode(true);

    person.querySelector('.name').innerText = personData.firstName + ' ' + personData.lastName;
    person.querySelector('.date').innerText = formatDate(personData.birthDate);
    person.querySelector('.salary').innerText = 
        personData.salary.toLocaleString('da-dk', { 
            style: 'currency', currency: 'DKK'
        });

    return person;
}

/**
 * Generates person information
 * @returns a <section> with information about persons
 */
export const personsList = () => {
    const personsSection = document.createElement('section');

    persons.forEach((person) => {
        personsSection.appendChild(formatPerson(person));
    });
    return personsSection;
}
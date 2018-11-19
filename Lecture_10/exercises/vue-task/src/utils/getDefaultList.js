import { guid } from './guid'

const createPerson = (name, surname, phoneNumber) => {
  const id = guid()
  const person = {
    id,
    name,
    surname,
    phoneNumber
  }

  return person
}

export const getDefaultList = () => ([
  createPerson('Karel', 'Novak', '786581235'),
  createPerson('Jan', 'Stastny', '748528965'),
  createPerson('Klara', 'Zemanova', '738596125'),
  createPerson('Petr', 'Kral', '785965842'),
  createPerson('Kamil', 'Zednik', '749685123'),
  createPerson('Tereza', 'Novakova', '796584158'),
  createPerson('Karolina', 'Fialova', '793254186'),
  createPerson('Petr', 'Novotny', '741245863')
])

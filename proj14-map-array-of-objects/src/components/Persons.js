import persons from '../data/persons'
import Person from './Person'

function Persons() {
  return (
    <div className="cards">
      {persons.map((person) => {
        // const { id, firstName, lastName, email, img } = person
        return (
          // <Person
          //   id={id}
          //   firstName={firstName}
          //   lastName={lastName}
          //   email={email}
          //   img={img}
          // />
          <Person key={person.id} {...person} />
        )
      })}
    </div>
  )
}

export default Persons

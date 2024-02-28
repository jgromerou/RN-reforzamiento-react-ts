interface Person {
  firstName: string;
  lastName: string;
  age: number;
  address: Address,
  isAlive?: boolean
}

interface Address {
    country: string;
    houseNo: number;
}

export const ObjectLiterals = () => {
  
    const person: Person = {
    firstName: "Fabian",
    lastName: "Jerez",
    age: 33,
    isAlive: undefined,
    address: {
      country: "Argentina",
      houseNo: 111,
    },
  };


  return (
    <>
        <h3>Objetos Literales</h3>
        <pre>
            {JSON.stringify(person, null, 2)}
        </pre>
    </>
  );
};

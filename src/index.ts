interface User {
  name: string;
  age: number;
}

function generateUser({ name, age }: User) {
  const user = {
    name,
    age,
  }

  return user
}

const user = generateUser({
  name: 'John Doe',
  age: 30,
})

console.log(user);

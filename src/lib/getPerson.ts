type Person = {
  name: string;
};

export default function getPerson(): Promise<Person> {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ name: 'John' }), 1000)
  );
}

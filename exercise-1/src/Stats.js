function Stats() {
    const people = [
      { name: "Alice", age: 30, occupation: "Engineer" },
      { name: "Bob", age: 13, occupation: "Designer" },
      { name: "Charlie", age: 35, occupation: "Manager" },
      { name: "Rim", age: 15, occupation: "Engineer" },
      { name: "Bia", age: 17, occupation: "Designer" },
    ];
  
    const oldest = people.reduce((prev, curr) => (curr.age > prev.age ? curr : prev));
    const youngest = people.reduce((prev, curr) => (curr.age < prev.age ? curr : prev));
  
    const grouped = people.reduce((acc, person) => {
      if (!acc[person.occupation]) {
        acc[person.occupation] = { totalAge: 0, count: 0 };
      }
      acc[person.occupation].totalAge += person.age;
      acc[person.occupation].count += 1;
      return acc;
    }, {});
  
    return (
      <div>
        <h2>Oldest & Youngest</h2>
        <p><strong>Oldest:</strong> {oldest.name} - {oldest.age}</p>
        <p><strong>Youngest:</strong> {youngest.name} - {youngest.age}</p>
  
        <h2>Average Age by Occupation</h2>
        <ul>
          {Object.entries(grouped).map(([job, data], index) => (
            <li key={index}>
              {job}: {(data.totalAge / data.count).toFixed(2)} years
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default Stats;
  
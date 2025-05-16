function GroupByOccupation() {
    const people = [
      { name: "Alice", age: 30, occupation: "Engineer" },
      { name: "Bob", age: 25, occupation: "Designer" },
      { name: "Charlie", age: 35, occupation: "Manager" },
      { name: "Rim", age: 15, occupation: "Engineer" },
      { name: "Bia", age: 17, occupation: "Designer" },
    ];
  
    const grouped = people.reduce((acc, person) => {
      const key = person.occupation;
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(person);
      return acc;
    }, {});
  
    return (
      <div>
        <h2>Group by Occupation</h2>
        {Object.keys(grouped).map((job, index) => (
          <div key={index}>
            <h4>{job}</h4>
            <ul>
              {grouped[job].map((p, i) => (
                <li key={i}>{p.name} - {p.age}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
  
  export default GroupByOccupation;
  
function SortPeople() {
    const people = [
      { name: "Alice", age: 30, occupation: "Engineer" },
      { name: "Bob", age: 25, occupation: "Designer" },
      { name: "Charlie", age: 35, occupation: "Manager" },
      { name: "Rim", age: 15, occupation: "Engineer" },
      { name: "Bia", age: 17, occupation: "Designer" },
    ];
  
    const sortedPeople = [...people].sort((a, b) => {
        if (a.occupation < b.occupation) return -1;
        if (a.occupation > b.occupation) return 1;
        return a.age - b.age;
      });
      
      console.log(sortedPeople);
      
  
    return (
      <div>
        <h2>Sorted People (Occupation - Age)</h2>
        <ul>
          {sortedPeople.map((p, index) => (
            <li key={index}>{p.name} - {p.occupation} - {p.age}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default SortPeople;
  
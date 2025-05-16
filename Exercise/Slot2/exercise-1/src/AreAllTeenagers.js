function AreAllTeenagers() {
    const people = [
      { name: "Alice", age: 30, occupation: "Engineer" },
      { name: "Bob", age: 13, occupation: "Designer" },
      { name: "Charlie", age: 35, occupation: "Manager" },
      { name: "Rim", age: 15, occupation: "Engineer" },
      { name: "Bia", age: 17, occupation: "Designer" },
    ];
  
    const allTeenagers = people.every(p => p.age >= 13 && p.age <= 19);
  
    return (
      <div>
        <h2>Are All Teenagers?</h2>
        <p>{allTeenagers ? "Yes" : "No"}</p>
      </div>
    );
  }
  
  export default AreAllTeenagers;
  
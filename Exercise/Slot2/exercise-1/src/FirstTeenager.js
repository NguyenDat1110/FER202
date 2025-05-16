function FirstTeenager() {
    const people = [
      { name: "Alice", age: 30, occupation: "Engineer" },
      { name: "Bob", age: 25, occupation: "Designer" },
      { name: "Charlie", age: 35, occupation: "Manager" },
      { name: "Rim", age: 15, occupation: "Engineer" },
      { name: "Bia", age: 17, occupation: "Designer" },
    ];
  
    const firstTeen = people.find(p => p.age >= 13 && p.age <= 19);
  
    return (
      <div>
        <h2>First Teenager</h2>
        {firstTeen ? (
          <p>{firstTeen.name} - {firstTeen.age}</p>
        ) : (
          <p>No teenager found</p>
        )}
      </div>
    );
  }
  
  export default FirstTeenager;
  
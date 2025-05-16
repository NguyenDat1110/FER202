function PersonDetails() {
    const person = {
      name: "Bob",
      age: 25,
      occupation: "Designer"
    };
  
    return (
      <div>
        <h2>Person Details</h2>
        <p><strong>Name:</strong> {person.name}</p>
        <p><strong>Age:</strong> {person.age}</p>
        <p><strong>Occupation:</strong> {person.occupation}</p>
      </div>
    );
  }
  
  export default PersonDetails;
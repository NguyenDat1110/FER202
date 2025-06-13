import { useState } from 'react';

function UserForm() {
  const [name, setName] = useState('Adam');
  const [age, setAge] = useState(35);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Ví dụ 2: User Form</h2>
      <div style={{ marginBottom: '15px' }}>
        <label>Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            console.log(e.target.value);
          }}
          style={{ marginLeft: '10px', padding: '5px' }}
        />
        <p>My name is {name}</p>
      </div>
      
      <div style={{ marginBottom: '15px' }}>
        <label>Age: </label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(parseInt(e.target.value, 10))}
          style={{ marginLeft: '10px', padding: '5px' }}
        />
        <p>My age is {age}</p>
      </div>
    </div>
  );
}

export default UserForm;
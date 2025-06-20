// src/components/ItemList.js
import React, { useReducer, useState } from "react";
import { listReducer, initialState } from "../reducers/listReducer";
import { Button, Form, ListGroup, Container } from "react-bootstrap";

function ItemList() {
  const [state, dispatch] = useReducer(listReducer, initialState);
  const [newItemName, setNewItemName] = useState("");

  const handleAddItem = () => {
    if (newItemName) {
      const newItem = { id: Date.now(), name: newItemName };
      dispatch({ type: "ADD_ITEM", item: newItem });
      setNewItemName("");
    }
  };

  const handleRemoveItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", id });
  };

  const handleEditItem = (id) => {
    const newName = prompt("Edit item name:");
    if (newName) {
      dispatch({ type: "EDIT_ITEM", id, name: newName });
    }
  };

  const handleSortByName = () => dispatch({ type: "SORT_ITEMS", by: "name" });
  const handleSortByTime = () => dispatch({ type: "SORT_ITEMS", by: "time" });
  const handleSearch = (e) =>
    dispatch({ type: "SET_FILTER", value: e.target.value });

  const filteredItems = state.items.filter((item) =>
    item.name.toLowerCase().includes(state.filter.toLowerCase())
  );

  return (
    <Container className="mt-4">
      <h3>Item List</h3>
      <Form.Group>
        <Form.Label>New Item</Form.Label>
        <Form.Control
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
          placeholder="Enter item"
        />
      </Form.Group>
      <Button variant="primary" onClick={handleAddItem} className="mt-2">
        Add Item
      </Button>

      <hr />
      <Form.Control
        type="text"
        placeholder="Search item..."
        className="mb-3"
        onChange={handleSearch}
      />
      <Button variant="secondary" onClick={handleSortByName} className="me-2">
        Sort A-Z
      </Button>
      <Button variant="secondary" onClick={handleSortByTime}>
        Sort by Time
      </Button>

      <ListGroup className="mt-3">
        {filteredItems.map((item) => (
          <ListGroup.Item
            key={item.id}
            className="d-flex justify-content-between align-items-center"
          >
            {item.name}
            <div>
              <Button
                variant="warning"
                size="sm"
                onClick={() => handleEditItem(item.id)}
                className="me-2"
              >
                Edit
              </Button>
              <Button
                variant="danger"
                size="sm"
                onClick={() => handleRemoveItem(item.id)}
              >
                Remove
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default ItemList;

// reducers/listReducer.js
export const initialState = {
  items: [],
  filter: "",
};

export function listReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, items: [...state.items, action.item] };

    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };

    case "EDIT_ITEM":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.id ? { ...item, name: action.name } : item
        ),
      };

    case "SORT_ITEMS":
      const sorted = [...state.items].sort((a, b) =>
        action.by === "name" ? a.name.localeCompare(b.name) : a.id - b.id
      );
      return { ...state, items: sorted };

    case "SET_FILTER":
      return { ...state, filter: action.value };

    default:
      return state;
  }
}

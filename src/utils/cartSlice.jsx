import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      const tempItem = action.payload.menuCard;
      const index = state.items.findIndex(
        (x) => x.item?.card?.info?.id === tempItem.card?.info?.id
      );
      if (index === -1) {
        state.items.push({
          item: tempItem,
          count: 1,
          restaurant: action.payload.resInfo,
        });
      } else {
        state.items[index].count += 1;
      }
    },
    removeitems: (state, action) => {
      const tempItem = action.payload;
      const index = state.items.findIndex(
        (x) => x.item?.card?.info?.id === tempItem.card?.info?.id
      );
      if (state.items[index].count === 1) {
        state.items.splice(index, 1);
      } else if (index !== -1) {
        state.items[index].count -= 1;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItems, removeitems, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

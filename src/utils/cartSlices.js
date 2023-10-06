import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        clearCart: (state) => {
            state.items = [];
        },
        removeItem: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload.id);
        },
        updateItem: (state, action) => {
            const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);
            state.items.splice(itemIndex, 1, action.payload);
        }
    }
});

export default cartSlice.reducer;
export const { addItem, clearCart, removeItem, updateItem } = cartSlice.actions;
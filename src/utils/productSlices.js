import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
    name: 'product',
    initialState: {
        items: null
    },
    reducers: {
        addProduct: (state, action) => {
            state.items = action.payload;
        },
        updateProduct: (state, action) => {
            const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);
            state.items.splice(itemIndex, 1, action.payload);
        }
    }
});

export default productSlice.reducer;
export const { addProduct, updateProduct } = productSlice.actions;
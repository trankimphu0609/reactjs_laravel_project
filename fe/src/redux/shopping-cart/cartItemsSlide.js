import { createSlice } from '@reduxjs/toolkit'

const items = localStorage.getItem('cartItems') !== null ? JSON.parse(localStorage.getItem('cartItems')) : []

const initialState = {
    value: items,
}

export const cartItemsSlice = createSlice({
    name: 'cartItems',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload
            console.log(newItem)
            const duplicate = state.value.filter(e => e.id === newItem.id && e.color === newItem.color && e.size === newItem.size)
            if (duplicate.length > 0) {
                state.value = state.value.filter(e => e.id !== newItem.id || e.color !== newItem.color || e.size !== newItem.size)
                state.value = [...state.value, {
                    id:newItem.id,
                    img01: newItem.img01,
                    name:newItem.name,
                    color: newItem.color,
                    colorID: newItem.colorID,
                    size: newItem.size,
                    sizeID: newItem.sizeID,
                    price: newItem.price,
                    quantity: newItem.quantity + duplicate[0].quantity
                }]
            } else {
                state.value = [...state.value, {
                    ...action.payload
                }]

            }
            // localStorage.setItem('user', JSON.stringify({
            //     'id':'1',
            //     'name' :'name',
            //     'phone' : 'phone',
            //     'address' : 'address'
            // }))
            localStorage.setItem('cartItems', JSON.stringify(state.value.sort((a, b) => a.id > b.id ? 1 : (a.id < b.id ? -1 : 0))))
        },
        updateItem: (state, action) => {
            const newItem = action.payload
            const item = state.value.filter(e => e.id === newItem.id && e.color === newItem.color && e.size === newItem.size)
            if (item.length > 0) {
                state.value = state.value.filter(e => e.id !== newItem.id || e.color !== newItem.color || e.size !== newItem.size)
                state.value = [...state.value, {
                    id:newItem.id,
                    img01: newItem.img01,
                    name:newItem.name,
                    color: newItem.color,
                    colorID: newItem.colorID,
                    size: newItem.size,
                    sizeID: newItem.sizeID,
                    price: newItem.price,    
                    quantity: newItem.quantity   
                }]
            }
            localStorage.setItem('cartItems', JSON.stringify(state.value.sort((a, b) => a.id > b.id ? 1 : (a.id < b.id ? -1 : 0))))
        },
        removeItem: (state, action) => {
            const item = action.payload
            state.value = state.value.filter(e => e.id !== item.id || e.color !== item.color || e.size !== item.size)
            localStorage.setItem('cartItems', JSON.stringify(state.value.sort((a, b) => a.id > b.id ? 1 : (a.id < b.id ? -1 : 0))))
        },
    },
})

// Action creators are generated for each case reducer function
export const { addItem, removeItem, updateItem } = cartItemsSlice.actions

export default cartItemsSlice.reducer
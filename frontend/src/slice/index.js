import { createSlice } from '@reduxjs/toolkit'

export const itemSlice = createSlice({
  name: 'item',
  initialState: {
    data: ['salom'],
    count: 0
  },
  reducers: {
    set_item: (state, action) => {
      state.data = action.payload
    },
    postItem: (state, action) => {
      state.data = [...state.data, action.payload]
    },
    deleteItem: (state, action) => {
      state.data = state.data.filter(mal => mal.id !== action.payload)
    },
    updateItem: (state, action) => {
      let newItem = action.payload
      let newData = state.data.map(mal => {
        if (mal.id === newItem.id) {
          return newItem
        }
        return mal
      })
      state.data = newData
    },
  },
})


export const { set_item, postItem, deleteItem, updateItem } = itemSlice.actions

export default itemSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    activemenukey: 'Dashboard',
    sidebaropen: true,
    expandedkey: '',
    draweropen: true
  },
  reducers: {
    setActiveMenuKey: (state, action) => {
      state.activemenukey = action.payload
    },
    setOpenSideBar: (state, action) => {
      state.sidebaropen = action.payload
    },
    setExpandedKey: (state, action) => {
      state.expandedkey = action.payload
    },
    setOpenDrawer: (state,action) => {
        state.draweropen = action.payload
    }
  },
})

export const { setActiveMenuKey,setOpenSideBar,setExpandedKey,setOpenDrawer } = sidebarSlice.actions

export default sidebarSlice.reducer

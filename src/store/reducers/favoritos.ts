import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type FavoritosState = {
  itensFavoritos: Produto[]
}

const initialState: FavoritosState = {
  itensFavoritos: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.itensFavoritos.find((p) => p.id === produto.id)) {
        const favoritosSemProduto = state.itensFavoritos.filter(
          (p) => p.id !== produto.id
        )
        state.itensFavoritos = favoritosSemProduto
      } else {
        state.itensFavoritos.push(produto)
      }
    }
  }
})

export const { favoritar } = favoritosSlice.actions
export default favoritosSlice.reducer

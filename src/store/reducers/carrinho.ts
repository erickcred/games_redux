import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Game } from '../../App'

type CarrinhoState = {
  itens: Game[]
}
const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Game>) => {
      const jogo = action.payload

      if (state.itens.find((game) => game.id === jogo.id)) {
        alert('Item já adicionada')
      } else {
        state.itens.push(jogo)
      }
    }
  }
})

/*
function adicionarAoCarrinho(jogo: Game) {
  if (carrinho.find((game) => game.id === jogo.id)) {
    alert('Item já adicionado')
  } else {
    setCarrinho([...carrinho, jogo])
  }
}
*/
export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer

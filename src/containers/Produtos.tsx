import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'

import * as S from './styles'

import { useSelector } from 'react-redux/'
import { RootReducer } from '../store'

type Props = {
  produtos: ProdutoType[]
  // favoritos: ProdutoType[]
}

const ProdutosComponent = ({ produtos }: Props) => {
  const itensFavoritos = useSelector(
    (state: RootReducer) => state.favoritos.itensFavoritos
  )

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id
    const IdsDosFavoritos = itensFavoritos.map((f) => f.id)

    return IdsDosFavoritos.includes(produtoId)
  }

  return (
    <>
      <S.Produtos>
        {produtos.map((produto) => (
          <Produto
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
            key={produto.id}
            produto={produto}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent

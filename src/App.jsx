

import Hoteiss from "./components/Hoteiss"
import Carrinho from "./components/carrinho"
import Hoteiss2 from "./components/Hoteiss2"
import Hoteiss3 from "./components/Hoteiss3"
import Hoteiss4 from "./components/Hoteiss4"
import Header from "./components/header"
import Imagem from "./components/imagem"
import Formulario from "./components/formulario"
import { useState } from "react"
import { useEffect } from "react"


function App() {
  const [aluguel, setAluguel] = useState(0) //valor do hotel
  const [totaldias, setTotaldias] = useState(0) // valor diaria
  const [carrinho, setCarrinho] = useState([]) // produtos do carrinho (hotel selecionado)
  const [carrinhoo, setCarrinhoo] = useState([]) // produtos api
  const [adulto, setAdulto] = useState(0) // valor hospodes
  const [crianca, setCrianca] = useState(0) // valor hospodes
  const [bebe, setBebe] = useState(0) // valor hospodes
  const [data, setData] = useState({ //data
    dia: "",
    mes: ""
  })


  const pelotas = [
    { id: 1, nome: "Hotel Básico", preco: 100, estrelas: 3 },
    { id: 2, nome: "Hotel Jacques Georges", preco: 350, estrelas: 4.5 },
    { id: 3, nome: "Hotel Luxo Parque", preco: 500, estrelas: 5 },
  ]
  const gramado = [
    { id: 4, nome: "Pousada da Serra", preco: 250, estrelas: 4 },
    { id: 5, nome: "Master Gramado", preco: 480, estrelas: 4.8 },
    { id: 6, nome: "Exclusive Resort", preco: 950, estrelas: 5 },
  ]
  const rioDeJaneiro = [
    { id: 7, nome: "Copacabana Econômico", preco: 180, estrelas: 3 },
    { id: 8, nome: "Arena Leme", preco: 550, estrelas: 4.2 },
    { id: 9, nome: "Belmond Copacabana Palace", preco: 2800, estrelas: 5 },
  ]
  const saoPaulo = [
    { id: 10, nome: "Ibis Budget", preco: 220, estrelas: 3 },
    { id: 11, nome: "Transamerica Prime", preco: 600, estrelas: 4.5 },
    { id: 12, nome: "Rosewood SP", preco: 3200, estrelas: 5 },
  ]

  function total(preco) {
    setAluguel(preco)  // ao clicar no botao o estado armazena o preco


  }

  function adddias() {
    if (totaldias < 14) {
      setTotaldias(totaldias + 1)
    }

  }

  function removerdias() {
    if (totaldias > 0) {
      setTotaldias(totaldias - 1)
    }
    // enquanto o total de dias for mais que 0, posso remover 1 dia (serve para mão ficar negativo)
  }

  function addadulto() {
    if (adulto + bebe + crianca < 8) {
      setAdulto(adulto + 1)
    }
  }

  function remadulto() {
    if (adulto > 0) {
      setAdulto(adulto - 1)
    }
  }

  function addcrianca() {
    if (adulto + bebe + crianca < 8) {
      setCrianca(crianca + 1)
    }

  }

  function remcrianca() {
    if (crianca > 0) {
      setCrianca(crianca - 1)
    }
  }


  function addkids() {
    if (adulto + bebe + crianca < 8) {
      setBebe(bebe + 1)
    }
  }

  function removerkids() {
    if (bebe > 0) {
      setBebe(bebe - 1)
    }
  }

  function reset() {
    setTotaldias(0)
    setAluguel(0)
    setCarrinho([])
    setAluguel(0)
    setBebe(0)
    setCrianca(0)
    setAdulto(0)
    //zera tudo

  }

  function adicionarr(produto) {
    setCarrinho([produto])
  }


  useEffect(() => {
    fetch("https://dummyjson.com/products") //conteudo que estamos pegando
      .then((res) => res.json())  //formato
      .then((data) => {
        console.log(data)
        setCarrinhoo(data.products) // atualizar a lista
      })
      .catch((erro) => {
        console.log("ERRO:", erro)
      })
  }, [])

  const hoteis = carrinhoo.map((item) => {
    return {
      id: item.id,
      nome: `🏨 Hotel ${item.title}`,
      preco: item.price + 200,
      imagem: item.thumbnail,
      estrelas: item.rating
      //Adaptar a Api para meu site
    }
  })

  const totaldiaria = (aluguel * totaldias) + (adulto * 100) + (crianca * 50)
  const taxa = (adulto * 100) + (crianca * 50)
  return (

    <div className="min-h-screen bg-cover bg-fixed bg-center p-6"
      style={{ backgroundImage: "url('/src/assets/fundoo.jpg')" }}
    >
      <Header />

      <div className="  bg-linear-to-br from-[#1294c7] via-[#208199] to-[#15b1e0] w-190 ml-135 mt-4 shadow  h-18 hover:scale-105 rounded-full flex items-center  ">
        <div className="flex gap-10 ml-25  font-bold text-black rounded-full w-150  ">
          <div className="">
            <h1> Adultos:</h1>
            <button className="hover:scale-200" onClick={remadulto}>-</button>
            <span> {adulto} </span>
            <button className="hover:scale-200" onClick={addadulto}>+</button>

          </div>
          <div>
            <h1> Crianças:</h1>
            <button className="hover:scale-200" onClick={remcrianca}>-</button>
            <span> {crianca} </span>
            <button className="hover:scale-200" onClick={addcrianca}>+</button>

          </div>
          <div >
            <h1 > Bebes:</h1>
            <button className="hover:scale-200" onClick={removerkids}>-</button>
            <span> {bebe} </span>
            <button className="hover:scale-200" onClick={addkids}>+</button>

          </div>
          <select
            value={data.mes}
            onChange={(e) =>
              setData({ ...data, mes: e.target.value })
            }
          >
            <option value="">Selecione o mês</option>
            <option value="1">Janeiro</option>
            <option value="2">Fevereiro</option>
            <option value="3">Março</option>
            <option value="4">Abril</option>
            <option value="5">Maio</option>
            <option value="6">Junho</option>
            <option value="7">Julho</option>
            <option value="8">Agosto</option>
            <option value="9">Setembro</option>
            <option value="10">Outubro</option>
            <option value="11">Novembro</option>
            <option value="12">Dezembro</option>
          </select>
          <div>
            <label className=" font-bold text-black rounded-full h-">Selecione o dia:</label>
            <select
              value={data.dia} // Certifique-se que no seu 'useState' existe a propriedade 'dia'
              onChange={(e) =>
                setData({ ...data, dia: e.target.value })
              }
            >
              <option value="">Dia</option>

              {/* Criando um array de 28 posições e mapeando os números */}
              {Array.from({ length: 28 }, (_, i) => i + 1).map((dia) => (
                <option key={dia} value={dia}>
                  {dia}
                </option>
              ))}
            </select>
          </div>


        </div>
        {bebe + adulto + crianca === 8 && (   // Se a total de dias for igual a 14 - executo a mensagem
          <h1 className=" font-bold ml-50 mt-10">
            Você chegou ao limite de Hospedes
          </h1>
        )}


      </div>
      <div className="sticky top-200">
        <h1 className="text-black font-bold">Data: {data.dia}/{data.mes}</h1>
        <h1 className="text-black font-bold"> Total Dias: {totaldias}</h1>
        <h1 className="text-black font-bold"> Adultos: {adulto}</h1>
        <h1 className="text-black font-bold"> Crianças: {crianca}</h1>
        <h1 className="text-black font-bold"> Bebês: {bebe}</h1>

      </div>



      {/* Onde você chama o componente Carrinho */}
      <div className="sticky top-20">
        <Carrinho
          itens={carrinho}    // Passando a lista de hotéis que você adicionou
          dias={totaldias}    // Passando o número de dias que o usuário escolheu
          totaldiaria={totaldiaria.toFixed(2)}
          alugel={aluguel} // Passando o valor final (aluguel * dias)
          taxa={taxa}
          reset={reset}
        />
      </div>

      <div className="flex justify-center">
        <Imagem
        />

      </div>


      <div className="flex justify-center">
        <h1 className="text-white font-bold mt-10 text-3xl"> -- Hoteis -- </h1>
      </div>



      <h1 className="font-bold mt-20 text-black bg-linear-to-br from-[#fef08a] via-[#e9ca95] to-[#f7af78] rounded-full h-8 w-90"> Acomodações muito procuradas em Pelotas</h1>
      <div className="grid grid-cols-3 gap-6">
        {hoteis.map((hotel) => (
          <Hoteiss2
            imagem={hotel.imagem}
            nome={hotel.nome}
            preco={hotel.preco}
            estrelas={hotel.estrelas}
            adddias={adddias}
            removerdias={removerdias}
            total={total}
            reset={reset}
            adicionarr={() => adicionarr(hotel)}   // funções sendo mandadas para o props
            totaldias={totaldias}
          />

        ))}
      </div>
      <h1 className="font-bold mt-10 text-white"> Acomodações muito procuradas em São Paulo</h1>
      <div className="grid grid-cols-3 gap-6">
        {saoPaulo.map((produto) => (
          <Hoteiss3
            nome={produto.nome}
            preco={produto.preco}
            estrelas={produto.estrelas}

          />

        ))}
      </div>
      <h1 className="font-bold mt-10 text-white"> Acomodações muito procuradas em Gramado</h1>
      <div className="grid grid-cols-3 gap-6">
        {gramado.map((produto) => (
          <Hoteiss4
            nome={produto.nome}
            preco={produto.preco}
            estrelas={produto.estrelas}

          />

        ))}
      </div>
      <h1 className="font-bold mt-10 text-white"> Acomodações muito procuradas em Rio de Janeiro</h1>
      <div className="grid grid-cols-3 gap-6">
        {rioDeJaneiro.map((produto) => (
          <Hoteiss
            nome={produto.nome}
            preco={produto.preco}
            estrelas={produto.estrelas}

          />

        ))}
      </div>

      <footer className="bg-linear-to-br from-[#fef08a] via-[#e9ca95] to-[#f7af78] font-semibold text-xl mt-10 shadow flex justify-center h-20 items-center">
        <h1> @ Desenvolvido por Rafael Valente</h1>
      </footer>
    </div>






  )
}

export default App

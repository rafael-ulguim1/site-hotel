function Hoteiss2(props) {
    return (
        <div className="bg-linear-to-br from-[#fef08a] via-[#e9ca95] to-[#f7af78]  mt-10 rounded-xl shadow py-4 px-20 border border-amber-500/50 "
            style={{ backgroundImage: "url('src/assets/fundo2_card.png')" }}

        >
            <img src={props.imagem} className="h-30" ></img>
            <h2 className="font-semibold"> {props.nome}</h2>
            <p> R$ {props.preco}</p>
            <p> Avaliação: {props.estrelas}</p>
            <button onClick={props.adddias} className=" hover:scale-110 font-bold  mt-10 ml-10 bg-white rounded-full h-10 w-40 "> Adicionar diária (dia) </button>
            <button onClick={props.removerdias} className=" hover:scale-110 ml-10 font-bold  bg-white rounded-full h-10 w-40"> Remover diária (dia) </button>
            <button
                onClick={() => {
                    props.adicionarr()
                    props.total(props.preco); // props entregou a função e a variavel
                }}
                className=" hover:scale-110 font-bold  mt-7 ml-30 bg-white rounded-full h-10 w-40"
            >
                Selecionar Hotel

            </button>
            <button onClick={props.reset} className=" hover:scale-110 font-bold  mt-7 ml-30 bg-white rounded-full h-10 w-40">Limpar </button>



        </div>
    )
}

export default Hoteiss2

// ao clicar no botao pego o preço do hotel e mando pra função
function Hoteiss(props) {
    return (
        <div className="bg-linear-to-br from-[#fef08a] via-[#e9ca95] to-[#f7af78]  mt-10 rounded-xl shadow py-4 px-20">
            <img className="h-30" src="/src/assets/hotel.jpg"></img>
            <h2 className="font-semibold"> {props.nome}</h2>
            <p> R$ {props.preco}</p>
            <p> Avaliação: {props.estrelas}</p>




        </div>
    )
}

export default Hoteiss

// ao clicar no botao pego o preço do hotel e mando pra função
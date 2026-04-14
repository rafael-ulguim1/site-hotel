function Carrinho(props) {
    return (
        <div className="bg-linear-to-br from-[#fef08a] via-[#e9ca95] to-[#f7af78]rounded-xl shadow-xl rounded-xl mt-3 ">
            <h1 className="font-bold"> Hotel Selecionado </h1>
            {props.itens.length === 0 ? ( //se o carrinho estivar vazio (?), mostrar a mensagem, se não (:) mostra os intes abaixo.
                <p className="text-gray-500">Nenhum Hotel Selecionado</p>
            ) : (
                props.itens.map((item) => (  // percorrendo os itens do carrinho
                    <div
                        key={item.id}
                        className="flex justify-between items-center mb-2"
                    >
                        <div>
                            <p>{item.nome}</p>
                            <p className="text-gray-500">R$ {item.preco}</p>
                            <p className="text-black-500"> Avaliação: {item.estrelas}</p>
                            <p> Total de dias:  {props.dias}</p>
                            <p> Valor Total R${props.totaldiaria}</p>
                            <p> Taxas de Hospedes R$ {props.taxa} </p>
                            <button onClick={props.reset} className=" hover:scale-110 font-bold   bg-white rounded-full h-10 w-40"> Limpar </button>
                        </div>
                        <div>


                        </div>


                    </div>
                ))
            )}
        </div>
    )

}








export default Carrinho
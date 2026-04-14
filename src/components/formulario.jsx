function Formulario() {
    return (
        <div>
            <div className="flex gap-10 ml-40  ">
                <div className="">
                    <h1> Adultos:</h1>
                    <button className="hover:scale-200" onClick={removerdias}>-</button>
                    <span> {totaldias} </span>
                    <button className="hover:scale-200" onClick={adddias}>+</button>

                </div>
                <div>
                    <h1> Crianças:</h1>
                    <button className="hover:scale-200" onClick={removerdias}>-</button>
                    <span> {totaldias} </span>
                    <button className="hover:scale-200" onClick={adddias}>+</button>

                </div>
                <div>
                    <h1> Bebes:</h1>
                    <button className="hover:scale-200" onClick={removerdias}>-</button>
                    <span> {totaldias} </span>
                    <button className="hover:scale-200" onClick={adddias}>+</button>

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
                    <label>Selecione o dia:</label>
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
        </div>

    )
}

export default Formulario
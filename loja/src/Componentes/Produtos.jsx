function Produtos(props){
    return(
        <div className="">
            <img src={props.img} alt="produto" />
            <br />
            <h2 className="opacity-60 font-semibold text-base">{props.nome}</h2>
            <br />
            <p className="text-[#98b020] font-bold">{props.preco}</p>
            <p className="mb-16 opacity-60">{props.desc}</p>
        </div>
    )
}
export default Produtos
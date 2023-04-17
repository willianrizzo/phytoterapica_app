function Produtos(props){
    return(
        <div className="">
            <img src={props.img} alt="produto" />
            <button class="relative w-3/4 bottom-16 left-10 p-2 border-2 text-[#FFF] rounded-full ring-2 ring-gray-900 bg-gray-50 bg-opacity-40 opacity-0 hover:bg-[#98b020] hover:opacity-100 transition-all duration-500">
             Adcionar ao Carrinho
            </button>
            <br />
            <h2 className="opacity-60 font-semibold text-base">{props.nome}</h2>
            <br />
            <p className="text-[#bad144] font-bold">{props.preco}</p>
            <p className="mb-16 opacity-60">{props.desc}</p>
            
        </div>
    )
}
export default Produtos
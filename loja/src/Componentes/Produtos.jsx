function Produtos(img, nome, preco,desc){
    return(
        <div className="">
            <img  src={img} alt="produto" />
            <h2>{nome}</h2>
            <p>{preco}</p>
            <p>{desc}</p>
        </div>
    )
}
export default Produtos
function News(){
    return(
        <div className=" relative m-auto flex items-center w-full h-24 bg-gray-200 ">
           <div>
                <h3>INSCREVA-SE</h3>
                <p>E RECEBA NOVIDADES E PROMOÇÕES</p>
           </div>
           <input placeholder="Digite seu E-mail:" type="email" />
           <button>
                 Assinar Newsletter
            </button>
        </div>
    )
}
export default News
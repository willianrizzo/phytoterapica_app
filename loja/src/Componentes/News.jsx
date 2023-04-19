function News(){
    return(
        <div className=" relative m-auto flex items-center w-full h-24 bg-gray-100 ">
           <div className="m-auto flex justify-between gap-10">
                <div className=" m-auto">
                        <h3 className="text-lg">INSCREVA-SE</h3>
                        <p className="font-thin">E RECEBA NOVIDADES E PROMOÇÕES</p>
                </div>
                <input className="p-2 rounded-full w-96" placeholder="Digite seu E-mail:" type="email" />
                <button className="bg-[#a8c321] w-72 p-2 rounded-full text-[#fff] ">
                        Assinar Newsletter
                </button>
           </div>
           
        </div>
    )
}
export default News
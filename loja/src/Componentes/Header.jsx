import Logo from "../assets/logo.png"
import User from "../assets/user.svg"
import Cart from "../assets/cart.svg"


function Header(){
    return(
        <div className="flex w-full justify-between p-14 items-center border-y">
            <div>
                <img src={Logo} alt="" className="w-72 " />
            </div>
            
            <div className="flex gap-12">
                <input placeholder="Pesquisar" className="bg-stone-100 h-8 px-8 rounded-full" type="search" name="" id="" />
                <input placeholder="-5% na primeira compra." className="bg-stone-100 h-8 px-8 rounded-full" type="" name="" id="" />
                <img className="w-6" src={User} alt="" />
                <img className="w-6" src={Cart} alt="" />
            </div>
        </div>
        
    )
}
export default Header
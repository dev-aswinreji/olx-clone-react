import { useNavigate } from "react-router-dom"
import OlxLogo from "../../assets/OlxLogo"
import { MdSearch } from "react-icons/md"
import { BsArrowDown } from "react-icons/bs"
import SellButton from "../../assets/SellButton"
import SellButtonPlus from "../../assets/sellButtonPlus"
import "./Header.css"

export default function Header() {


    const navigate = useNavigate()


    return (
        <div className="headerParentDiv">
            <div className="headerChildDiv">
                <div onClick={(e) => {
                    e.preventDefault()
                    navigate('/')
                }} className="brandName">
                    <OlxLogo />
                </div>
                <div className="placeSearch">
                    <div className="input">
                        <input type="text"
                            placeholder="Find car, mobile, phone and more..."
                        />
                    </div>
                    <div className="searchAction">
                        <MdSearch />
                    </div>
                </div>
                <div className="language">
                    <span>English</span>
                    <BsArrowDown />
                </div>
                <div className="loginPage">
                    <span className="logOptions"
                        onClick={() => navigate('/login')} >{
                            // user ? `Welcom ${user.Displayname}` : "Login"
                        }
                    </span>
                    <hr />
                </div>
                {/* {user && <span className="logOptions" onClick={
                    navigate('/')
                }>Logout</span>} */}

                <div onClick={(e)=>{
                    e.preventDefault()
                    // {user? navigate('/create'):navigate('/login')}
                }}
                 className="sellMenu">
                    <SellButton/>
                    <div className="sellMenuContent">
                        <SellButtonPlus/>
                        <span>SELL</span>
                    </div>
                 </div>

            </div>
        </div>
    )
}
import Banner from "../Components/Banner/Banner";
import Header from "../Components/Header/Header";


export default function Home(){
    return (
        <div className="homeParentDiv">
            <Header/>
            <Banner/>
        </div>
    )
}
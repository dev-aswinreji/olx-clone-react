import Banner from "../Components/Banner/Banner";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";


export default function Home(){
    return (
        <div className="homeParentDiv">
            <Header/>
            <Banner/>
            <Footer/>
        </div>
    )
}
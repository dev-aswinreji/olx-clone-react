import Banner from "../Components/Banner/Banner";
import Create from "../Components/Create/Create";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";


export default function Home(){
    return (
        <div className="homeParentDiv">
            <Header/>
            <Banner/>
            <Create/>
            <Footer/>
        </div>
    )
}
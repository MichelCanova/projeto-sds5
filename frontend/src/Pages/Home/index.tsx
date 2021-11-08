import Footer from "components/Footer";
import NavBar from "components/NavBar";
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <NavBar />
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-4">DSVendas</h1>
                    <p className="lead">Analise de desempenho das suas vendas por diferentes perpectivas</p>
                    <hr />
                    <p>Este aplicativo consiste em exibir um dashboard apartir de dados fornecidos por um backend construido com spring boot.</p>
                    <Link className="btn btn-primary btn-lg" to="/dashboard">Acessar o Dashboard</Link>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;
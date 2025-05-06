import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

const Root = () => {
    return (
        <div>
            <div className="flex flex-col h-screen w-screen bg-gray-100">
                <Navbar />
                <main className="flex-grow p-4">Main Content</main>
                <Footer />
            </div>
        </div>
    );
};

export default Root;
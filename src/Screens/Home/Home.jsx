import { useNavigate } from "react-router-dom";
import Cart from "../Cart/Cart";
import { useEffect } from "react";

const Home = () => {
    const navigate = useNavigate()
    // const [bookdata, setbookdata] = useState(initialdata);
    const userId = localStorage.getItem('userId');
    useEffect(() => {

        if (!userId) {
            console.log(userId)
            navigate('/login');
        }

    }, [])
    return (
        <div className="min-h-screen bg-gray-100">

            <main className="container mx-auto p-6">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-12 text-center">Explore Our Book Collection</h1>
                <Cart />
            </main>

        </div>
    );
};

export default Home;

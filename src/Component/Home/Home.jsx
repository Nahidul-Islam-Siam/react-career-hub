import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import CatogoryList from "../CatogoryList/CatogoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Carrer Hub | Home</title>
            </Helmet>
            <Banner></Banner>
            <CatogoryList></CatogoryList>
           <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;
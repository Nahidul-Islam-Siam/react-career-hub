import Banner from "../Banner/Banner";
import CatogoryList from "../CatogoryList/CatogoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CatogoryList></CatogoryList>
           <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;
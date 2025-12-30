
import Hero from "../components/Hero";
import Courses from "../components/Courses";
import Promo from '../components/Promo';
import Categorie from '../components/Categorie';
import FeatureStrip from '../components/FeatureStrip';
import PopularCourses from '../components/PopularCourses';
import Review from '../components/Review';
import SubscriptionBanner from '../components/SubscriptionBanner';
import Blogs from '../components/Blogs';

const LandingPage = () => {
    return (
        <>
            <Promo />
            <Hero />
            <FeatureStrip />
            <Categorie />
            <Courses />
            <PopularCourses />
            <Review />
            <SubscriptionBanner />
            <Blogs />
        </>
    )
}

export default LandingPage

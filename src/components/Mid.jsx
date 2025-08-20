import ServicesSlider from "./ServicesSlider";
import AboutBar from "./AboutBar"
import ReviewsBar from "./ReviewsBar";
import MapBar from "./MapBar";

const Mid = () => {
    return (
        <div className="mid">
            <AboutBar></AboutBar>
            <ServicesSlider></ServicesSlider>
            <ReviewsBar></ReviewsBar>
            <MapBar></MapBar>
        </div>
    );
}

export default Mid;
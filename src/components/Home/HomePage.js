import videohomepage from '../../assets/videos/video-homepage.mp4'
const HomePage = () => {
    return(
        <div className="homepage-container">
            <video autoPlay muted loop>
                <source 
                    src={videohomepage}
                    type="video/mp4"
                />
            </video>
            <div className="homepage-content">
                <h1>Homepage</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi eget mauris pharetra et. Non tellus orci ac auctor augue. Elit at imperdiet dui accumsan sit. Ornare arcu dui vivamus arcu felis. Egestas integer eget aliquet nibh praesent. In hac habitasse platea dictumst quisque sagittis purus. Pulvinar elementum integer enim neque volutpat ac.</p>
                <button className='btn btn-primary'>Get Started</button>
            </div>
        </div>
    );
}
export default HomePage;
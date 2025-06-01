import background from "../background.mp4";


const Background = () => {
    return (
        <video autoPlay playsInline muted loop className='bg'>
            <source src={background} type="video/mp4"/>
        </video>
    )
}
export default Background;

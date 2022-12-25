import UpperBodyImg from "../public/images/upperbodyimg.png"

export default function UpperBody() {
    return(
        <section className="upperbody-main">
            <img src={UpperBodyImg} className="upperbodyimg" alt="loading..." />
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
        </section>
    )
}
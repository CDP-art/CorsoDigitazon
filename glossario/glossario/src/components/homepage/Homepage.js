import "./homepage.css"

export default function Homepage() {

    const titoli = ["HTML", "CSS", "JAVASCRIPT", "REACT"]

    return (
        <div id="homepage">
            <div id="container">
                <h1>BENVENUTI NEL MIO GLOSSARIO</h1>
                <div id="buttonsContainer">
                    {titoli.map(e => {
                        return (
                            <button className="button" key={e}>{e}</button>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
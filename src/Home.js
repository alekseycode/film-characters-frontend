const name = process.env.REACT_APP_NAME


function Home() {
    return (
        <>
            <h1>Click on a link to get started!</h1>
            {name}
        </>
    );
}

export default Home;
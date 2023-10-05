import './index.css';

const Elemento = ({numeroAtomico, simboloQuimico, nome, pesoAtomico, bg}) => {
    return (
        <>
            <div className='elemento' bg={bg}>
                <h5>{numeroAtomico}</h5>
                <h1>{simboloQuimico}</h1>
                <h6>{nome}</h6>
                <h6>{pesoAtomico}</h6>
            </div>
        </>
    );
}

export default Elemento;
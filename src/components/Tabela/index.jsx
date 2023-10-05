import Elemento from "../Elemento";

import './index.css';

const Tabela = () => {
    return (
        <>
            <div className="linha">
                <Elemento
                    numeroAtomico={1}
                    simboloQuimico={'H'}
                    nome={'hidrogênio'}
                    pesoAtomico={'1,008'}
                    bg={'verde'}
                />
                <Elemento
                    numeroAtomico={2}
                    simboloQuimico={'He'}
                    nome={'hélio'}
                    pesoAtomico={'4,0026'}
                    bg={'gas-nobre'}
                />
            </div>
            <div className="linha">
                <div className="coluna">
                    <Elemento
                        numeroAtomico={3}
                        simboloQuimico={'Li'}
                        nome={'lítio'}
                        pesoAtomico={'6,94'}
                        bg={'laranja'}
                    />
                    <Elemento
                        numeroAtomico={4}
                        simboloQuimico={'Be'}
                        nome={'berílio'}
                        pesoAtomico={'9,0122'}
                        bg={'amarelo'}
                    />
                </div>
                <div className="coluna">
                    <Elemento
                        numeroAtomico={5}
                        simboloQuimico={'B'}
                        nome={'boro'}
                        pesoAtomico={'10,81'}
                    />
                    <Elemento
                        numeroAtomico={6}
                        simboloQuimico={'C'}
                        nome={'carbono'}
                        pesoAtomico={'12,011'}
                    />
                    <Elemento
                        numeroAtomico={7}
                        simboloQuimico={'N'}
                        nome={'nitrogênio'}
                        pesoAtomico={'14,007'}
                    />
                    <Elemento
                        numeroAtomico={8}
                        simboloQuimico={'O'}
                        nome={'oxigênio'}
                        pesoAtomico={'15,999'}
                    />
                    <Elemento
                        numeroAtomico={9}
                        simboloQuimico={'F'}
                        nome={'flúor'}
                        pesoAtomico={'18,998'}
                    />
                    <Elemento
                        numeroAtomico={10}
                        simboloQuimico={'Ne'}
                        nome={'neônio'}
                        pesoAtomico={'20,180'}
                    />
                </div>


            </div>
        </>
    );
}

export default Tabela;
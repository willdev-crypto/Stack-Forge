import styles from './App.module.css';

function Detalhes({ selecionado }) {
    return (
        <div className={styles.Detalhes}>
            <h2>Detalhes:</h2>
            {selecionado ? (
                <>
                    <p>Nome: {selecionado.nome}</p>
                    <p>Sobrenome: {selecionado.sobrenome}</p>
                    <p>Idade: {selecionado.idade}</p>
                    <p>Profissão: {selecionado.profissão}</p>
                </>
            ) : (
                <p>Selecione Um Usuario</p>
            )}
        </div>
    );
}

export default Detalhes;

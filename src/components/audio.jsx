

export default function Audio({ src }){
    return (
        <>
        <h3>Componente Audio</h3>
        <audio controls>
            <source src={ src }/>
        </audio>

        </>

    )
}
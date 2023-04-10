
export default function Video( { src, type }){

    return (
        <>
         <h3>Componente Video</h3>
        <video controls>
             <source
                src={ src }
                type={ type }


                />
        </video>
        </>
    )

}
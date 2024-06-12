export function TestForm({valeur}){
    return(
        <>
            <label>Donner votre prenom : </label>
           
            <input type="text" value={valeur}></input>
             <br></br>
        </>
    );
};


export function SecondeForm({valeurs}){
    return(
        <>
            <label>Donner votre age : </label>
            {/* <br></br> */}
            <input type="text" value={valeurs}></input>
        </>
    )
}

// export {TestForm, SecondeForm};
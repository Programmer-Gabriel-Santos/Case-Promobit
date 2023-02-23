export const goHome = (navigate) =>{
    navigate("/")
}

export const goDetails = (navigate, id, setId) =>{
    navigate("/detalhes")
    setId(id)
}

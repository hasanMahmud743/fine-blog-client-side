const updateProduct = (id, product) => {
    return async (dispatch, getState) =>{
        console.log(id)
        const res = await fetch (`https://fine-blog-server-side.vercel.app/${id}`,{
            method: 'PATCH',
            headers:{
                'content-type' : 'application/json'
            },
            body : JSON.stringify({product : product})
        })
        const data = await res.json()
        console.log(data)

    }
}

export default updateProduct
export const deletePost = (id) => {
    return {
        type: 'DELETE_POST',
        id: id
    }
}

export const editBody = (post) => {
    return {
        type: 'EDIT_BODY',
        post: post
        //body: data,
        //id: id
    }
}


    
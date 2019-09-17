const initState = {
    posts:[
        {id: '0', title: 'Squirtle Laid an Egg', body: '1Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'},
        {id: '1', title: 'Charmander Laid an Egg', body: '2Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'},
        {id: '2', title: 'a Helix Fossil was Found', body: '3Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'}
    ]
} 

const rootReducer = (state = initState, action) => {
    switch( action.type ) {

        case 'DELETE_POST':
            let newPosts = state.posts.filter( post => {
                return action.id !== post.id
            });
            const newState = {
                ...state,
                posts: newPosts
            }
            return newState;
            
        case 'EDIT_BODY':    
            console.log(action);
            console.log(action.post.title);
            console.log(action.post.body);
            state.posts[action.post.id].body = action.post.body;
            return state;

            

        default:
            return state;    
    }   
}

export default rootReducer;
    



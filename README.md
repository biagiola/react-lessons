# react-lessons
React and redux
1 - In home.js we added the property mapStateToProps that allows dispatching a deletePost action.
2 - We created a file call postsActions.js in action's folder. This file return an object with the action's name and the id of the element that we want to delete.
3 - We created a file call rootReducer.js in reducer's folder. This file validated what type of accion we want to do and according what we want to execute. In this case, the action type is 'DELETE_POST'. We filter it out the deleted post, spread the initState (with all post), replace with the new ones and return it.

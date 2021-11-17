import { PostsAction, PostsActionTypes, PostsState } from "../../types/posts";

const initialState: PostsState = {
  posts: [],
  postDetails: null,
  loading: false,
  error: null,
  postsNumber: 5,
  postId: 1,
};

export const postsReducer = (state = initialState, action: PostsAction): PostsState => {
  switch (action.type) {
    case PostsActionTypes.FETCH_POSTS:
      return {
        ...state,
        loading: true,
        error: null,
        posts: [],
        postsNumber: 5,
        // postDetails: [],
        // postId: state.postId,
      };
    case PostsActionTypes.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        posts: action.payload,
        postsNumber: 5,
        // postDetails: [],
        // postId: state.postId,
      };
    case PostsActionTypes.FETCH_POSTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        posts: [],
        postsNumber: 5,
        // postDetails: [],
        // postId: state.postId,
      };
    case PostsActionTypes.INCREASE_POSTS_NUMBER:
      return {
        ...state,
        // loading: state.loading,
        // error: null,
        // posts: state.posts,
        postsNumber: state.postsNumber + 5,
        // postDetails: [],
        // postId: state.postId,
      };
    case PostsActionTypes.FETCH_POSTS_DETAILS:
      return {
        ...state,
        loading: true,
        error: null,
        // posts: [],
        // postsNumber: 5,
        postDetails: null,
        // postId: state.postId,
      };
    case PostsActionTypes.FETCH_POSTS_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        // posts: state.posts,
        // postsNumber: 5,
        postDetails: action.payload,
        // postId: state.postId,
      };
    case PostsActionTypes.FETCH_POSTS_DETAILS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        // posts: [],
        // postsNumber: 5,
        postDetails: null,
        // postId: state.postId,
      };
    case PostsActionTypes.FIND_POST_ID:
      return {
        ...state,
        // loading: state.loading,
        // error: state.error,
        // postDetails: state.postDetails,
        // posts: state.posts,
        // postsNumber: state.postsNumber,
        postId: action.payload,
      };
    default:
      return state;
  }
};

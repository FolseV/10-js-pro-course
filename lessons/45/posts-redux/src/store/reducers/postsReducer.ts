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
      };
    case PostsActionTypes.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        posts: action.payload,
        postsNumber: 5,
      };
    case PostsActionTypes.FETCH_POSTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        posts: [],
        postsNumber: 5,
      };
    case PostsActionTypes.INCREASE_POSTS_NUMBER:
      return {
        ...state,
        postsNumber: state.postsNumber + 5,
      };
    case PostsActionTypes.FETCH_POSTS_DETAILS:
      return {
        ...state,
        loading: true,
        error: null,
        postDetails: null,
      };
    case PostsActionTypes.FETCH_POSTS_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        postDetails: action.payload,
      };
    case PostsActionTypes.FETCH_POSTS_DETAILS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        postDetails: null,
      };
    case PostsActionTypes.FIND_POST_ID:
      return {
        ...state,
        postId: action.payload,
      };
    default:
      return state;
  }
};

export interface PostsType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export enum PostsActionTypes {
  FETCH_POSTS = "FETCH_POSTS",
  FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS",
  FETCH_POSTS_ERROR = "FETCH_POSTS_ERROR",
  INCREASE_POSTS_NUMBER = "INCREASE_POSTS_NUMBER",
  FETCH_POSTS_DETAILS = "FETCH_POSTS_DETAILS",
  FETCH_POSTS_DETAILS_SUCCESS = "FETCH_POSTS_DETAILS_SUCCESS",
  FETCH_POSTS_DETAILS_ERROR = "FETCH_POSTS_DETAILS_ERROR",
  FIND_POST_ID = "FIND_POST_ID",
}

interface FetchPostsAction {
  type: PostsActionTypes.FETCH_POSTS;
}

interface FetchPostsSuccessAction {
  type: PostsActionTypes.FETCH_POSTS_SUCCESS;
  payload: PostsType[];
}

interface FetchPostsErrorAction {
  type: PostsActionTypes.FETCH_POSTS_ERROR;
  payload: string;
}

interface IncreasePostsNumberAction {
  type: PostsActionTypes.INCREASE_POSTS_NUMBER;
}

interface FetchPostsDetailsAction {
  type: PostsActionTypes.FETCH_POSTS_DETAILS;
}

interface FetchPostsDetailsSuccessAction {
  type: PostsActionTypes.FETCH_POSTS_DETAILS_SUCCESS;
  payload: PostsType;
}

interface FetchPostsDetailsErrorAction {
  type: PostsActionTypes.FETCH_POSTS_DETAILS_ERROR;
  payload: string;
}
interface FindPostIdAction {
  type: PostsActionTypes.FIND_POST_ID;
  payload: number;
}
export interface PostsState {
  posts: PostsType[];
  postDetails: PostsType | null;
  loading: boolean;
  error: null | string;
  postsNumber: number;
  postId: number;
}
export type PostsAction =
  | FetchPostsAction
  | FetchPostsSuccessAction
  | FetchPostsErrorAction
  | IncreasePostsNumberAction
  | FetchPostsDetailsAction
  | FetchPostsDetailsSuccessAction
  | FetchPostsDetailsErrorAction
  | FindPostIdAction;

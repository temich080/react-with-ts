import {IPost} from "../../types/types";

export interface IProps {
  posts: IPost[];
  isLoading: boolean;
  remove: (p: IPost) => void;
}
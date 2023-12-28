import { User } from './User';
import { Article } from './Article';
export class Comment {
  _id: number;
  comment: string;
  Article: Article = {} as Article;
  User: User = {} as User;
}

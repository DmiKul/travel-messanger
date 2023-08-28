import { Content } from './contentModel';
import { IDate } from './dateModel';

export interface IPost extends Content {
  pageId: string;
  authorId: string;
  authorImg: string;
  authorFName: string;
  authorLName: string;
  photos: File[]; // photo id list
  text: string;
  // date: moment.Moment;
  // date: IDate
  date: string;
}

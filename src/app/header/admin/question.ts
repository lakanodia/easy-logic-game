export interface IQuestion {
  answer: string;
  firstPicture: string;
  secondPicture: string;
  id: number;
}
export type INewQuestion = Pick<
  IQuestion,
  'answer' | 'firstPicture' | 'secondPicture'
>;

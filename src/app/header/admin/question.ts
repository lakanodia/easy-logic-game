
export interface Question {
    answer: string;
    firstPicture: string;
    secondPicture: string;
    id: number;
}
// export type INewQuestion = Pick<Question, 'answer' | 'firstPicture' | 'secondPicture'>
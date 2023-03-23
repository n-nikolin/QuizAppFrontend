export interface IQuiz {
  id?: number;
  title: string;
  description: string;
  created?: Date;
  edited?: Date;
  questions: IQuestion[];
  results: IResult[];
}

export interface IQuestion {
  id?: number;
  text: string;
  choices: IChoice[];
}

export interface IChoice {
  id?: number;
  text: string;
  value: number;
}

export interface IResult {
  id?: number;
  title: string;
  description: string;
  value: number;
}

export interface IUserChoices {
  quiz_id: number;
  choices: IChoice[];
}

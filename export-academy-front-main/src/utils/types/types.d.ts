export type ChildrenProps = {
  children?: React.ReactNode;
};

export type langInitialState = {
  lang: string;
  translations: { [key: string]: string };
  languageLoading: boolean;
};
export type AuthInitialState = {
  Login: boolean;
  SignUp: boolean;
};

export type AuthorizationToken = {
  access_token: string;
  expires_in: number;
  user: User;
};

export type UserParams = {
  email: string;
  password: string;
};

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  is_doctor: string;
  permission: string;
  extra_info: string | null;
  created_at: string;
}

export type UserState = {
  user: User | null;
  isLogin: boolean;
  isSignUp: boolean;
};

export type Course = {
  name: string;
  instructor: string;
  rating: number;
  price: number;
  DiscountPrice: number;
  reviews: number;
  imageUrl: string;
  duration: number;
  lessons: number;
  index?: number;
  about?: string;
  description?: string[];
  studentNum?: number;
};

export type Lesson = {
  imgUrl: string;
  video: string;
  LessonName: string;
  description: string;
  duration: number;
};

export type RankStarsProps = {
  starNumber: number;
  color?: "white" | "black";
};

export type ReviewProps = {
  Reviews: {
    id: number;
    name: string;
    rank: number;
    date: string;
    image: string;
    description: string;
  }[];
};

export type CurriculumItem = {
  text: string;
};

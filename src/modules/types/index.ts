export interface IUser {
  id: number;
  // avatar: string;
  // firstName: string;
  // lastName: string;
  // infoId: number;
  login: string;
  // profession: string;
  // telegram?: string;
  // instagram?: string;
  // linkedIn?: string;
}

interface Table {
  id: number;
  user: IUser;
}

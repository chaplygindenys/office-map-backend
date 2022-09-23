import { type } from "os";

export type  Id = {
  id: number;
}

export type Name ={
  name: string;
}

export type IUser = Id & {
  login: string;
  password: string;
  telegram: string;
  telegramId?: string;
  userInfoId?: string;
}

export  type UserInfo = Id & {

    avatar?: string;
  firstName?: string;
  lastName?: string;

  profession?: string;
  instagram?: string;
  linkedIn?: string;
}



export type Favorite = Id & Name;

export type Badge = Id & Name & {  
url: string;
userIds: Id[];
}


export type Room = Id & Name & {

  tableIds: Id[];
}

export type  Table  = Id &  {
  roomId : Id; 
  userIds: Id[];
}

export interface User {
  id: number;
  name: string;
  status: UserStatus;
  image: string; 
}

export enum UserStatus {
  ONLINE = 'Online',
  OFFLINE = 'Offline',
  UNKNOWN = 'unknown'
}

export interface Order {
  id: number;
  userId: number;
  total: number;
}
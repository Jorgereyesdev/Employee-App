export type Role = 'DEV' | 'QA' | 'PM' | 'LT';
export interface Employee {
  id: number;
  fullName: string;
  email: string;
  role: Role
  active: boolean;
}

import { config } from 'app/config/config';
import { HttpException, HttpStatus } from "@nestjs/common";

export interface Application {
    name: string,
    github: string,
    twitter:  string,
    mobile:  string,
    email:  string,
  }
  /**
* format help method
* @param dateString 
* @returns 
*/
export const formatDate = (dateString: Date): any => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const day = date.getDate();
  const month = date.getMonth();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}


export interface PayementDataQuery {
  email: string
}
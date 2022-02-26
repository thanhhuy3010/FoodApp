import { data } from "@common";
import { ITicket } from "./TicketModel";

export const getData = () => {
  return new Promise((resolve, reject) => {
    const ticketList: ITicket = data;
    const {Result} = ticketList
    resolve(Result);
  });
}
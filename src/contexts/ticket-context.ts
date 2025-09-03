import { createContext } from 'react';

type TicketContextType = {
  ticketNumber: string;
  tableNumber: string;
};

export const TicketContext = createContext({} as TicketContextType);

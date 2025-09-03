import { createContext } from 'react';

type TicketContextType = {
  ticketId: string;
  tableNumber: string;
};

export const TicketContext = createContext({} as TicketContextType);

export const calculateTicketPercentage = (
  totalTickets: number,
  ticketsSold: number | null,
): number => {
  if (!ticketsSold) return 0;

  return Math.ceil((ticketsSold / totalTickets) * 100);
};

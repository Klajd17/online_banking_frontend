export class DashboardModel {
  constructor(
    public accountsNumber: number = 0,
    public transactionsNumber: number = 0,
    public cardsNumber: number = 0,
    public totalBalance: number = 0,
    public totalIncoming: number = 0,
    public totalOutgoing: number = 0
  ) {}
}

export class TransactionModel {
  constructor(
    public transactionId: number = 0,
    public fromAccountId: number = 0,
    public toAccountId: number = 0,
    public amount: number = 0.00,
    public transactionType: string = '',
    public status: string = '',
    public createdAt: Date | null = null,
    public accountId: number = 0,
    public fromAccount: string = '',
    public toAccount: string = '',
    public currency: string = ''
  ) {}
}

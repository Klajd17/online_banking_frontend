export class AccountModel {
  constructor(
    public accountId: number = 0,
    public userId: number = 0,
    public accountNumber: string = '',
    public balance: number = 0.00,
    public currency: string = '',
    public accountType: string = '',
    public createdAt: Date | null = null,
    public updatedAt: Date | null = null
  ) {}
}

export class TransactionCreateModel {
  constructor(
    public userId: number,
    public fromAccountId: number,
    public toAccountId: number,
    public amount: number,
    public currency: string,
    public transactionType: TransactionType,
    public status: TransactionStatus,
    public createdAt: Date | null = null,
    public updatedAt: Date | null = null
  ) {}
}

// Enum for transaction types
export enum TransactionType {
  DEPOSIT = "DEPOSIT",
  WITHDRAWAL = "WITHDRAWAL",
  TRANSFER = "TRANSFER",
}

// Enum for transaction status
export enum TransactionStatus {
  ACTIVE = "Active",
  PENDING = "Pending",
  COMPLETED = "Completed",
  CANCELLED = "Cancelled",
}

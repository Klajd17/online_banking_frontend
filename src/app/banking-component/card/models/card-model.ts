export class CardModel {
  constructor(
    public cardId: number = 0,
    public accountId: number = 0,
    public account: {
      accountId: number,
      userId: number,
      accountNumber: string,
      balance: number,
      currency: string | null,
      accountType: string,
      createdAt: number,
      updatedAt: number,
      user: {
        userId: number,
        username: string,
        password: string,
        email: string,
        fullName: string,
        address: string,
        phoneNumber: string,
        createdAt: number,
        updatedAt: number,
      }
    } = {
      accountId: 0,
      userId: 0,
      accountNumber: '',
      balance: 0,
      currency: null,
      accountType: '',
      createdAt: 0,
      updatedAt: 0,
      user: {
        userId: 0,
        username: '',
        password: '',
        email: '',
        fullName: '',
        address: '',
        phoneNumber: '',
        createdAt: 0,
        updatedAt: 0,
      },
    },
    public cardNumber: string = '',
    public expiryDate: number = 0,
    public cvv: number = 0,
    public cardType: string = '',
    public status: string = '',
    public createdAt: number = 0
  ) {}
}

export class UserModel {
  constructor(public user_id: number = 0, public email: string = '', public username: string = '',public full_name: string = '',
              public address: string = '',public phone_number: number | null = null ,public is_admin: boolean = false,public created_at: Date | null = null,
              public updated_at: Date | null = null) {
  }
}

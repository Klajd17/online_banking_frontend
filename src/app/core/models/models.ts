export class UserModel {
  constructor(public user_id: number = 0, public email: string = '', public username: string = '',public fullName: string = '',
              public address: string = '',public phoneNumber: number | null = null ,public is_admin: boolean = false,public created_at: Date | null = null,
              public updated_at: Date | null = null) {
  }
}

export class SerializeUtil {
  public serialize(): any {
  }

  public static deserialize<T>(obj: any, data: { [key: string]: any }): T {
    return Object.assign(obj, data);
  }

  // public static deserializeList<T>(obj: T[], data: { [key: string]: any }): T[] {
  //   return Object.assign(obj, data);
  // }
}

export class AuthToken {
  constructor(public access: string = '', public refresh: string = '',
              public id: number = 0, public username: string = '', public email: string = '',
              public first_name: string = '', public last_name: string = '', permissions: string[] = [], public business: number = 0) {
  }
}

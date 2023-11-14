import { IUserDto } from "./dtos/user.dto";

class AppService {
  async getUsers(): Promise<IUserDto> {
    const data = await fetch('https://reqres.in/api/users');

    const res: IUserDto = await data.json();
    // console.log('Res: ', res);

    return res;
  }
}

export const AppServ = new AppService()

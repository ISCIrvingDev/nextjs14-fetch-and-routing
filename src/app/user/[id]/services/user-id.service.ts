import { IUserDetailsDto } from "./dtos/user-details.dto";

class UserIdService {
  async getUserDetails(id: number): Promise<IUserDetailsDto> {
    const data = await fetch(`https://reqres.in/api/users/${id}`);

    const res: IUserDetailsDto = await data.json();
    // console.log('Res: ', res);

    return res;
  }
}

export const UserIdServ = new UserIdService()

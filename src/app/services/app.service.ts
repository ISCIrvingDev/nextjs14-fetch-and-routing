import { AppReqResInRepository } from '@/shared/repositories/app.reqres-in.repository';
import { IUserDto } from './dtos/user.dto';
// import { AppResponse } from '@/shared/models/app.response';

class AppService {
  async getUsers(): Promise</*AppResponse<*/IUserDto/*>*/> {
    const response = await AppReqResInRepository.get</*AppResponse<*/IUserDto/*>*/>('/users');

    const res: /*AppResponse<*/IUserDto/*>*/ = await response.data;
    // console.log('Res: ', res);

    return res;
  }
}

export const AppServ = new AppService()

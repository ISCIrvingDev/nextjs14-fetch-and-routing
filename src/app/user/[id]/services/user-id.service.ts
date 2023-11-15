import { AppReqResInRepository } from "@/shared/repositories/app.reqres-in.repository";
import { IUserDetailsDto } from "./dtos/user-details.dto";
// import { AppResponse } from "@/shared/models/app.response";

class UserIdService {
  async getUserDetails(id: number): Promise</*AppResponse<*/IUserDetailsDto/*>*/> {
    const response = await AppReqResInRepository.get</*AppResponse<*/IUserDetailsDto/*>*/>(`/users/${id}`);

    const res: /*AppResponse<*/IUserDetailsDto/*>*/ = await response.data;
    // console.log('Res: ', res);

    return res;
  }
}

export const UserIdServ = new UserIdService()

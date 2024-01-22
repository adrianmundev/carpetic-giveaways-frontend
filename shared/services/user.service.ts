import {
  EditEmailAddressInputType,
  EditPhoneNumberInput,
} from "../validation-schemas";
import { EditPersonalDetailsInput } from "../validation-schemas/editPersonalDetailsSchema";
import { apiClient } from "./api.service";

type UpdateUserPayload = EditPhoneNumberInput &
  EditPersonalDetailsInput &
  EditEmailAddressInputType;

class UserService {
  public async update(id: string, body: Partial<UpdateUserPayload>) {
    const response = await apiClient.patch(`/user/${id}`, body);
    console.log(response.data);
    return response.data;
  }
}

export const userService = new UserService();

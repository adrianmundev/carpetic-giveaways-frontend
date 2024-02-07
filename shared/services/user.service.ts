import {
  EditEmailAddressInputType,
  EditPhoneNumberInput,
} from "@/shared/validation-schemas";
import { EditPersonalDetailsInput } from "../validation-schemas/editPersonalDetailsSchema";
import { apiClient } from "./api.service";

type UpdateUserPayload = EditPhoneNumberInput &
  EditPersonalDetailsInput &
  EditEmailAddressInputType;

class UserService {
  public async update(id: string, body: Partial<UpdateUserPayload>) {
    const response = await apiClient.patch(`/user/${id}`, body);
    return response.data;
  }

  public async uploadProfilePicture(body: FormData) {
    const response = await apiClient.post(`/user/avatar`, body, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  }
}

export const userService = new UserService();

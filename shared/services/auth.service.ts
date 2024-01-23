import { apiClient } from "@/shared/services/api.service";
import {
  EditPasswordInput,
  SignUpInputType,
} from "@/shared/validation-schemas";

type RegisterBodyType = {
  timezone: string;
} & SignUpInputType;

class AuthService {
  public async login(body) {
    const response = await apiClient.post("/auth/sign-in", body);
    return response.data;
  }

  public async logout() {
    await apiClient.post("/auth/sign-out", {});
  }

  public async register(body: RegisterBodyType) {
    const response = await apiClient.post("/auth/sign-up", body);
    return response.data;
  }

  public async fetchUserSession() {
    const response = await apiClient.get("/auth/session");
    return response.data;
  }

  public async changePassword(body: EditPasswordInput) {
    const response = await apiClient.patch("/auth/change-password", body);
    return response.data;
  }
}

export const authService = new AuthService();

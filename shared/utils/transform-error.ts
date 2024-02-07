import { AxiosError } from "axios";

export type APIError = {
  error?: string;
  message: string;
};

const InternalError = {
  error: "Internal Error",
  message: "Something went wrong!. Please try again later!",
};

export const transformError = (error: unknown): APIError => {
  if (typeof error !== "object" || !error) {
    return InternalError;
  }

  if (error instanceof AxiosError) {
    const message = error.response.data.message;
    const err = error.response.data.error;
    if (typeof message === "string") {
      return {
        message,
        error: err,
      };
    }
    return {
      message: message[0],
      error: err,
    };
  }

  if (error instanceof Error && error) {
    return {
      message: error.message,
    };
  }

  return InternalError;
};

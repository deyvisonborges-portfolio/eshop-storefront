import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { HttpMethod, Params } from "./axios.types";

export class AxiosService {
  private http: AxiosInstance;

  constructor(private readonly baseURL: string) {
    this.http = axios.create({
      baseURL: this.baseURL,
      withCredentials: false,
      headers: this.setupHeaders(),
    });
  }

  private setupHeaders(hasAttachment = false) {
    return hasAttachment
      ? { "Content-Type": "multipart/form-data", ...this.getAuthorization }
      : { "Content-Type": "application/json", ...this.getAuthorization };
  }

  private get getAuthorization() {
    const accessToken =
      typeof window !== "undefined" ? localStorage.getItem("access-token") : "";
    return accessToken ? { Authorization: `Bearer ${accessToken}` } : {};
  }

  private normalizeError(error: any) {
    return Promise.reject(error);
  }

  // Handle HTTP requests
  private async request<T>(
    method: HttpMethod,
    url: string,
    options: AxiosRequestConfig,
  ): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.http.request<T>({
        method,
        url,
        ...options,
      });

      return response.data;
    } catch (error) {
      return this.normalizeError(error);
    }
  }

  // Perform GET request
  public async get<T>(
    url: string,
    params?: Params,
    hasAttachment = false,
  ): Promise<T> {
    return this.request<T>(HttpMethod.GET, url, {
      params,
      headers: this.setupHeaders(hasAttachment),
    });
  }

  // Perform POST request
  public async push<T, P>(
    url: string,
    payload: P,
    params?: Params,
    hasAttachment = false,
  ): Promise<T> {
    return this.request<T>(HttpMethod.POST, url, {
      params,
      data: payload,
      headers: this.setupHeaders(hasAttachment),
    });
  }

  // Perform UPDATE request
  public async update<T, P>(
    url: string,
    payload: P,
    params?: Params,
    hasAttachment = false,
  ): Promise<T> {
    return this.request<T>(HttpMethod.PUT, url, {
      params,
      data: payload,
      headers: this.setupHeaders(hasAttachment),
    });
  }

  // Perform DELETE request
  public async remove<T>(
    url: string,
    params?: Params,
    hasAttachment = false,
  ): Promise<T> {
    return this.request<T>(HttpMethod.DELETE, url, {
      params,
      headers: this.setupHeaders(hasAttachment),
    });
  }

  // Inject interceptors for request and response
  private injectInterceptors() {
    // Set up request interceptor
    this.http.interceptors.request.use((request) => {
      // * Perform an action
      // TODO: implement an NProgress
      return request;
    });

    this.http.interceptors.response.use(
      (response) => {
        return response;
      },

      (error) => {
        const response = error?.response;
        if (
          response?.status === 401 &&
          response?.request?.responseURL.includes("/access")
        ) {
          setTimeout(() => {
            localStorage.clear();
            window.location.href = "/";
          });
        }
        return Promise.reject(error);
      },
    );
  }
}

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

import config from "../configs";
import { EEnvVariables, EHttpMethod } from "../types";

class HttpService {
    private readonly http: AxiosInstance;
    private readonly baseURL = config.get(EEnvVariables.API_ROOT);

    constructor() {
        this.http = axios.create({ baseURL: this.baseURL, });
    }

    private async request<T>(
        method: EHttpMethod,
        url: string,
        options: Readonly<AxiosRequestConfig>
    ): Promise<T> {
        try {
            const response: AxiosResponse<T> = await this.http.request<T>({
                method,
                url,
                ...options,
            });

            return response.data;
        } catch (error: unknown) {
            return this.handleError(error);
        }
    }

    public async get<T>(url: string, params?: unknown): Promise<T> {
        return this.request<T>(EHttpMethod.GET, url, { params, });
    }

    private handleError(error: unknown) {
        return Promise.reject(error);
    }
}

export const httpService = new HttpService();

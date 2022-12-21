
import { BASE_SEASON_URL } from "../constants/api-constants";
import { API_KEY } from "../constants/api-key"
import { isNullOrEmptyArray } from "../ common-functions/common-functions";

export class F1HttpService {

    public async getSeasons(): Promise<any> {
        let url: Array<string> = [];
        url.push(BASE_SEASON_URL);
        url.push('?api_key=');
        url.push(API_KEY);
        const response = await fetch(this.buildURL(url));
        return await response.json();
    }

    public async getEvents(): Promise<any> {
        const response = await fetch('')
        return await response.json();
    }

    private buildURL(params?: any): string { 
        let fetchDestination = '';
        if (!isNullOrEmptyArray(params)) {
            params.forEach((param: string) => {
                fetchDestination += param;
            });
        }
        return fetchDestination;
    }
}
import { errorService, httpService } from "../services";
import { CharactersResponse } from "../types";

export const getCharactersData = async (page: number | string = 1)  => {
    try {
         return await httpService.get<CharactersResponse>(`/people?page=${page}`);
    } catch (err) {
        errorService.handle(err as string);
    }
};

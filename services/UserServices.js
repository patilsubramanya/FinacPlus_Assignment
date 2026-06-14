import { Constants } from '../utils/Constants.js';

export class UserServices {

    constructor(request) {

        this.request = request;

        this.headers = {
            'x-api-key': process.env.API_KEY
        };

    }

    async createUser(name, job) {

        console.log(process.env.API_KEY);

        return await this.request.post(
            `${process.env.API_BASE_URL}${Constants.API_ENDPOINTS.USERS}`,
            {
                headers: this.headers,
                data: {
                    name,
                    job
                }
            }
        );

    }

    async getUser(userId) {

        return await this.request.get(
            `${process.env.API_BASE_URL}${Constants.API_ENDPOINTS.USERS}/${userId}`,
            {
                headers: this.headers
            }
        );

    }

    async updateUser(userId, name, job) {

        return await this.request.put(
            `${process.env.API_BASE_URL}${Constants.API_ENDPOINTS.USERS}/${userId}`,
            {
                headers: this.headers,
                data: {
                    name,
                    job
                }
            }
        );

    }

}

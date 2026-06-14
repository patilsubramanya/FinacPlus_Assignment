import { test, expect } from '@playwright/test';
import { UserServices } from '../../services/UserServices.js';
import { Constants } from '../../utils/Constants.js';

test.describe('User API Tests', () => {

    test(
        'Verify user creation, retrieval and update',
        async ({ request }) => {

            const userService = new UserServices(request);

            let userId;

            await test.step('Create user', async () => {

                const createResponse =
                    await userService.createUser(
                        Constants.USER_NAME,
                        Constants.USER_JOB
                    );

                expect(createResponse.status())
                    .toBe(201);

                const createResponseBody =
                    await createResponse.json();

                userId = createResponseBody.id;

                expect(createResponseBody.name)
                    .toBe(Constants.USER_NAME);

                expect(createResponseBody.job)
                    .toBe(Constants.USER_JOB);
                
                test.info().attach(
                    'Create User Response',
                    {
                        body: JSON.stringify(createResponseBody, null, 2),
                        contentType: 'application/json'
                    }
                );

            });

            await test.step('Get user details', async () => {

                const getResponse =
                    await userService.getUser(2);

                expect(getResponse.status())
                    .toBe(200);

                const getResponseBody =
                    await getResponse.json();

                expect(getResponseBody.data.id)
                    .toBe(2);

                expect(getResponseBody.data.first_name)
                    .toBe('Janet');
                
                test.info().attach(
                    'Get User Response',
                    {
                        body: JSON.stringify(getResponseBody, null, 2),
                        contentType: 'application/json'
                    }
                );

            });

            await test.step('Update user', async () => {

                const updateResponse =
                    await userService.updateUser(
                        userId,
                        Constants.UPDATED_USER_NAME,
                        Constants.UPDATED_USER_JOB
                    );

                expect(updateResponse.status())
                    .toBe(200);

                const updateResponseBody =
                    await updateResponse.json();

                expect(updateResponseBody.name)
                    .toBe(Constants.UPDATED_USER_NAME);

                expect(updateResponseBody.job)
                    .toBe(Constants.UPDATED_USER_JOB);
                
                test.info().attach(
                    'Update User Response',
                    {
                        body: JSON.stringify(updateResponseBody, null, 2),
                        contentType: 'application/json'
                    }
                );

            });
            });
        });
import { test, expect } from '@playwright/test';

import { LoginPage } from '../../pages/LoginPage.js';
import { ProfilePage } from '../../pages/ProfilePage.js';
import { BookStorePage } from '../../pages/BookStorePage.js';

import { Constants } from '../../utils/Constants.js';
import { FileUtil } from '../../utils/FileUtil.js';


test.describe('Book Store Application', () => {

    test(
        'Verify user is able to search a book and save details',
        async ({ page }) => {

            const loginPage = new LoginPage(page);
            const profilePage = new ProfilePage(page);
            const bookStorePage = new BookStorePage(page);

            await page.goto('/');

            await test.step('Login to Book Store Application', async () => {

                await loginPage.navigateToBookStore();

                await loginPage.login(
                    process.env.USERNAME,
                    process.env.PASSWORD
                );

            });

            await test.step('Validate user profile information', async () => {

                expect(await profilePage.getUsername())
                    .toBe(process.env.USERNAME);

                expect(await profilePage.isLogoutButtonVisible())
                    .toBeTruthy();

            });

            await test.step('Navigate to Book Store and search book', async () => {

                await profilePage.goToBookStore();

                await bookStorePage.searchBook(
                    Constants.BOOK_NAME
                );

                expect(
                    await bookStorePage.isBookPresent(
                        Constants.BOOK_NAME
                    )
                ).toBeTruthy();

            });

            await test.step('Fetch and save book details', async () => {

                const bookDetails =
                    await bookStorePage.getBookDetails(
                        Constants.BOOK_NAME
                    );

                test.info().attach(
                    'Book Details',
                    {
                        body: JSON.stringify(bookDetails, null, 2),
                        contentType: 'application/json'
                    }
                );

                FileUtil.writeBookDetails(bookDetails);

            });

            await test.step('Logout from application', async () => {

                await bookStorePage.logout();

            });

        });

});
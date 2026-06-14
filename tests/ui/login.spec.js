import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage.js';
import { ProfilePage } from '../../pages/ProfilePage.js';

test('Verify user is able to login', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const profilePage = new ProfilePage(page);

    await page.goto('/');

    await loginPage.navigateToBookStore();

    await loginPage.login(
        process.env.USERNAME,
        process.env.PASSWORD
    );

    // await page.pause();

    console.log(await page.url());

    expect(await profilePage.getUsername())
        .toBe(process.env.USERNAME);

    expect(await profilePage.isLogoutButtonVisible())
        .toBeTruthy();

    await profilePage.goToBookStore();

    await page.waitForTimeout(3000);

});
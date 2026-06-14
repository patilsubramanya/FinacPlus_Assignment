import { expect } from '@playwright/test';
import { BasePage } from './BasePage.js';

export class ProfilePage extends BasePage {

    constructor(page) {

        super(page);

        this.usernameValue =
            page.locator('#userName-value');

        this.logoutButton =
            page.getByRole('button', { name: 'Logout' });

        this.bookStoreButton =
            page.getByRole('button', { name: 'Go To Book Store'});

    }

    async getUsername() {

        return await this.getInnerText(this.usernameValue);

    }

    async isLogoutButtonVisible() {

        return await this.logoutButton.isVisible();

    }

    async goToBookStore() {

        await this.click(this.bookStoreButton);

    }

}
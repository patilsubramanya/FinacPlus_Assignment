import { BasePage } from "./BasePage.js";

export class BookStorePage extends BasePage {

    constructor(page) {

        super(page);

        this.searchBox =
            page.locator('#searchBox');

        this.logoutButton =
            page.getByRole('button', { name: 'Log out' });
    }

    async searchBook(bookName) {

        await this.fill(this.searchBox, bookName);

    }

    async isBookPresent(bookName) {

        const bookLink = this.page.getByRole('link', {
            name: bookName
        });

        return await bookLink.isVisible();

    }

    async getBookDetails(bookName) {

        const bookRow = this.page.locator('tr')
            .filter({
                has: this.page.getByRole('link', {
                    name: bookName
                })
            });

        const columns = bookRow.locator('td');

        return {

            title: await columns.nth(1).innerText(),

            author: await columns.nth(2).innerText(),

            publisher: await columns.nth(3).innerText()

        };

    }

    async logout() {

        await this.click(this.logoutButton);

    }

}
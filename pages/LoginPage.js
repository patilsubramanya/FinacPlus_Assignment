import {BasePage} from "./BasePage.js";

export class LoginPage extends BasePage {
    constructor(page) {
        super(page);

        this.bookStoreApplicationCard = page.getByText('Book Store Application');
        
        this.loginButton = page.getByRole('button', { name: 'Login' });
        
        this.usernameInput = page.locator('#userName');
        
        this.passwordInput = page.locator('#password');
        
        this.submitLoginButton = page.locator('#login');
    }
    async navigateToBookStore() {
        await this.click(this.bookStoreApplicationCard);
    }

    async login(username, password) {
        await this.click(this.loginButton);
        await this.fill(this.usernameInput, username);
        await this.fill(this.passwordInput, password);
        await this.click(this.submitLoginButton);
    }
}
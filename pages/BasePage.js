export class BasePage {

    constructor(page) {
        this.page = page;
    }

    async navigate(url) {
        await this.page.goto(url);
    }

    async click(locator) {
        await locator.click();
    }

    async fill(locator, value) {
        await locator.fill(value);
    }

    async getText(locator) {
        return await locator.textContent();
    }

    async isVisible(locator) {
        return await locator.isVisible();
    }

    async getTitle() {
        return await this.page.title();
    }

    async isVisible(locator) {

        return await locator.isVisible();
    }

    async getInnerText(locator) {

        return await locator.innerText();
    }

}
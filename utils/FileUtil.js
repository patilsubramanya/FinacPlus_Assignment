import fs from 'fs';

export class FileUtil {

    static writeBookDetails(bookDetails) {

        const content =
            `Title : ${bookDetails.title}
            Author : ${bookDetails.author}
            Publisher : ${bookDetails.publisher}`;

        fs.writeFileSync(
            './output/bookDetails.txt',
            content
        );

    }

}
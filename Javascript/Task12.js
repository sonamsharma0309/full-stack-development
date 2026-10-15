let book = {
    title: "Discovery of India",
    author: "Pandit Jawaharlal Nehru",
    isRead: true
};

if (book.isRead) {
    console.log(`I have read "${book.title}" by ${book.author}.`);
} else {
    console.log(`I have not read "${book.title}" by ${book.author}.`);
}
const userInput = prompt("Enter a name to check if it's a palindrome:");

function checkPalindrome(name) {

    const nameStr = name.toLowerCase();

    const reversedNameStr = nameStr.split('').reverse().join('');

    if (nameStr === reversedNameStr) {
        console.log(`${name} is a palindrome`);
    } else {
        console.log(`${name} is not a palindrome`);
    }
}


checkPalindrome(userInput);


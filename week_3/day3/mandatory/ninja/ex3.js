function palindrome(char = "madam"){
    let rev = char.split("").reverse().join("")
    if(char === rev)return true
    return false
}
console.log(palindrome())
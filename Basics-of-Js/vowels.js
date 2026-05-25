function countVowels(str){
    const vowels="aeiouAEIOU";
    let count =0;

    for(let i=1;i<str.length;i++){
        if(vowels.includes(str[i])){
            count++
        }
    }
    return count;
}
console.log(countVowels("Riya Gulhane"));
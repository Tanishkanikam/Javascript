/* write a function 'isAnagram' which takes 2 parameters amd returns true/false is those are anagrams or not.
whats anagram?
-A word ,phase or name formed by rearranging the letters of another, such as spar , formed from rasp */

function isAnagram(str1, str2){
    const lowerCaseString1 = str1.toLowerCase();
    const arr1 = lowerCaseString1.split("");
    arr1.sort();
    const sortedstring1 = arr1.join("");

    const lowerCaseString2 = str2.toLowerCase();
    const arr2 = lowerCaseString2.split("");
    arr2.sort();
    const sortedstring2 = arr2.join("");



if (sortedstring1 == sortedstring2){
    return true;
    
}
else{
    return false;

}
}
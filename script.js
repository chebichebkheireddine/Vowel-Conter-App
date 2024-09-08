function chackVowle(){
 let text= document.getElementById("inputText").value;   
 let vowelsCount = 0;

 text= text.toLowerCase();
 for(let i=0;i<text.length;i++){
    let chat = text.charAt(i);
    if(isVowel(chat)){
        vowelsCount++;
    }

 }
 const result = document.getElementById("reuslt");
 result.textContent = `Result : ${vowelsCount}`;

}
function isVowel(chat){
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(chat);
}
function checkPalindrome(N, str) {
    let a="";
    let b="";
    for(i=0;i<=N-1;i++){
        a=a+str[i];
    }
    for(i=N-1;i>=0;i--){
        b=b+str[i];
    }
    if(a==b){
        console.log("Yes");
    }else{
        console.log("No");
    }
  
}

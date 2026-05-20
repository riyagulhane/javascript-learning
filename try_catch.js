try{
    let result = 10/0;
    console.log(result);
}catch(error){
    console.log("something went wrong",error.message);
}
//asending order
// data=["Sachin","Saurav","Anil","Rahul","Yuvraj"]
data=[12,65,213,78,213,87]
function cmp(a,b){
    console.log("cmp was called for "+a+","+b)
    if(a==b){
        return 0;
    }
    else if(a>b){
        return 1;
    }else {
        return -1;
    }
}
data.sort(cmp)
console.log(data)

//desending order

// data=["Sachin","Saurav","Anil","Rahul","Yuvraj"]
data=[12,65,213,78,213,87]
function cmpq(a,b){
    console.log("cmp was called for "+a+","+b)
    if(a==b){
        return 0;
    }
    else if(a>b){
        return -1;
    }else {
        return 1;
    }
}
data.sort(cmpq)
console.log(data)



data=[22,32,33,34,21,12,43]
//Condition based filtering
function my(e){
    console.log("filter called for "+e)
    return e<=30
} 
newdata =data.filter(my);
console.log(newdata)
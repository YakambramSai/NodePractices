data=[
    {fname:"Sachin",lname:"Tendulkar",team:"India"},
    {fname:"Saurav",lname:"Ganguly",team:"India"},
    {fname:"Ricky",lname:"Ponting",team:"Australia"},
    {fname:"Rahul",lname:"Dravid",team:"India"},
    {fname:"Brett",lname:"Lee",team:"Australia"}
]
//sort by fname in reverse order.
//filter only players from team Australia


data.sort(function (a,b){
  //  console.log("cmp was called for "+a.fname+","+b.fname)
    if(a.fname===b.fname){
        return 0;
    }
    else if(a.fname>b.fname){
        return 1;
    }else {
        return -1;
    }
})
console.log("After sorting");
console.log(data);

 
newdata = data.filter(function (e){
   // console.log("filter called for "+e.fname)
    return e.team=='Australia';
});
console.log("After filtering");
console.log(newdata)
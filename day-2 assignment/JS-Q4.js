let arr=["black","blue","green","pink","yellow","red","orange","violet","purple"];

let i;
for(i=0;i<arr.length;i++)
{
    let p=arr[i].indexOf('a');
    if(p>=0)
    {
        console.log(arr[i]);
    }
    
}
let arr=["black","blue","green","pink","yellow","red","orange","violet","purple"];

let i;
for(i=1;i<=arr.length;i++)
{
    if(arr[i]=="green")
    {
        console.log("element found in array");
        break;
    }
}
if(i>arr.length)
{
    console.log("element not found in array");
}
function addition(a,b)
{
    return a+b;
}
console.log("task 1");
console.log(addition(3,4));
function bitwiseAND(a,b)
{
    return a & b;
}
console.log("task 2");

console.log(bitwiseAND(5,3));
function bitwiseOR(a,b)
{
    return a | b;
}
console.log(bitwiseOR(5,3));

function bitwiseXOR(a, b)
{
    return a ^ b;
}
console.log(bitwiseXOR(5,3));

function addUp(a)
{
    let sum = 0;
    for (let index = 0; index <= a; index++) {
        sum+= index ;
        
    }
    return sum;
}
console.log("task 3");
console.log(addUp(10));

function progressBar(s)
{
    var ans = '';
    for (let index = 0; index <= 100 ; index+=10) {
        if (index < s)
        {
            ans += '#';
        }
        else
        {
            ans+= '-';
        }
        
    }
    return ans;
}
console.log("task 4");

console.log(progressBar(150));

function minMax(arr)
{
    var min = Number.MAX_SAFE_INTEGER;
    var max = Number.MIN_SAFE_INTEGER;
     for (let i = 0; i < arr.length; i++) {
        if(min > arr[i])
        {
            min = arr[i];
        }
        if (max < arr[i])
        {
            max = arr[i];
        }
        
     }

    return [min,max];
}
console.log("task 5");

console.log(minMax([-1,2,3,4,5,6]));


function calculaterRepoStats(repos)
{   
    var sum =0;
    var maxStar=Number.MIN_SAFE_INTEGER,minStar=Number.MAX_SAFE_INTEGER, avgStra, varianceScore;
    for (let i = 0; i < repos.length; i++) {

        if (repos[i].stars < minStar)
        {
            minStar = repos[i].stars;
        }
        if (repos[i].stars > maxStar)
        {
            maxStar = repos[i].stars;
        }
        sum += repos[i].stars;
    }
    avgStra = Math.round(sum/repos.length);
    varianceScore = Math.abs(maxStar - minStar);

    return {
        maxStars : maxStar,
        minStars : minStar,
        avgStars : avgStra,
        varianceScores:  varianceScore
    }

}
const repos = [ { name: 'repo-a', stars: 12},{name:'repo-b',stars:45},{name:'repo-c', stars:3}];
console.log("task 6");
console.log(calculaterRepoStats(repos));

function calculateFinalPrice(basePrice, taxRate , discountpercentage)
{
    var final = basePrice * (1 - discountpercentage/100);
    let tax = (taxRate/100) * final;
    final = Math.round(final*100)/100;
    return final;
}
console.log("task 7");
console.log(calculateFinalPrice(100, 24, 20));

function paginateData(items, pageNumber, pageSize)
 {
    if (!pageSize && pageSize <0)
    {
        pageSize = 5;
    }
    var data = [];
    var size = items.length;
    var start = 0;

    for (let i = 0; i < items.length; i++) {
        
        
    }
    




    return {
        data : data,
        currentPage: currentPage,
        totalPages: totalPages,
        hasNext : true,
        hasprev: true
    }
 }
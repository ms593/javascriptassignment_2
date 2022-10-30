//write a javascript function to check whether a traingle is equilateral,isoceles or scalene.

function triangle(x,y,z)
{
    if(x===y && y===z && x===z)
    return("its a equilateral triangle")
    else if(x===y||x===z)
    return("its a isosceles triangle")
    else
    return("its a scalene triangle")
}

let a = triangle(1,1,1);
console.log(a);
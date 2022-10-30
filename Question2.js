function grade(x)
{
    if (x>90 && x<=100)
    return("got a grade S");
    else if(x>80 && x<=90)
    return("got a grade A");
    else if(x>70 && x<=80)
    return("got a grade B");
    else if(x>60 && x<=70)
    return("got a grade C");
    else if(x>50 && x<=60)
    return("got a grade D");
    else if(x>40 && x<=50)
    return("got a grade E");
    else if(x>0 && x<=40)
    return("student is failed")
    else
    return("invalid marks");
}
mohit =grade(76)
console.log(mohit)
// Fibonacci Number

#include<iostream>
using namespace std;

int fib(int n){
    int dp[n+1];
    dp[0] = 0;
    dp[1] = 1;
    for(int i=2;i<=n;i++){
        dp[i] = dp[i-1]+dp[i-2];
    }
    return dp[n];
}

int main(){
    int n;
    cout<<"Enter value of n:"<<endl;
    cin>>n;
    cout<<n<<"th fibonacci number is "<<fib(n)<<endl;
}

// Time complexity: O(n).

/*
Output:

Enter value of n:
9
9th fibonacci number is 34

*/
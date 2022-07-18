/*
Optimal Game strategy
This is a two player game. There are even number of coins arranged in a row. There will be alternate turns. In each turn, a player can either select the first coin in the row or the last coin in the row and keep it with him. The objective of the problem is to determine the maximum possible amount of money a player can definitely win, if he move first.
*/ 

#include<iostream>
using namespace std;

int optimalGame(int a[],int n){
    int dp[n][n];
    int i,j;
    for(j=0;j<n;j++){
        dp[j][j] = a[j];
    }
    for(j=0;j<n-1;j++){
        dp[j][j+1] = max(a[j],a[j+1]);
    }
    for(i=2;i<n;i++){
        for(j=0;j+i<n;j++){
            int x = a[j]+min(dp[j+2][j+i],dp[j+1][j+i-1]);
            int y = a[j+i]+min(dp[j+1][j+i-1],dp[j][j+i-2]);
            dp[j][j+i] = max(x,y);
        }
    }
    return dp[0][n-1];
}

int main(){
    int n;
    cout<<"Enter number of coins:"<<endl;
    cin>>n;
    int a[100];
    cout<<"Enter the value of coins:"<<endl;
    for(int i=0; i<n; i++){
        cin>>a[i];
    }
    cout<<"Maximum amount of money we can definitely win, if we move first is "<<optimalGame(a,n)<<endl;
}

// Time complexity = O(n^2)

/*
Output:

Enter number of coins:
4
Enter the value of coins:
8 15 3 7
Maximum amount of money we can definitely win, if we move first is 22
*/ 
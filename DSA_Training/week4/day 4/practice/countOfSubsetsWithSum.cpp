// Count of subsets with sum equal to X

#include<iostream>
using namespace std;


int countSubsets(int a[],int n, int sum){
    int dp[n+1][sum+1];
    dp[0][0] = 1;
    for(int i=1;i<=sum;i++){
        dp[0][i] = 0;
    }
    for(int i=1;i<=n;i++){
        for(int j=0;j<=sum;j++){
            if(a[i-1]<=j){
                dp[i][j] = dp[i-1][j] + dp[i-1][j-a[i-1]];
            }
            else{
                dp[i][j] = dp[i-1][j];
            }
        }
    }
    return dp[n][sum];
}

int main(){
    int n;
    cout<<"Enter the number of elements in array:"<<endl;
    cin>>n;
    int a[n];
    cout<<"Enter array elements:"<<endl;
    for(int i=0; i<n; i++){
        cin>>a[i];
    }
    int sum;
    cout<<"Enter sum:"<<endl;
    cin>>sum;
    cout<<"Number of subsets with sum "<<sum<<" is "<<countSubsets(a,n,sum)<<endl;
}

// Time complexity - O(sum*n)

/*
Output:

Enter the number of elements in array:
4
Enter array elements:
1 2 3 3
Enter sum:
6
Number of subsets with sum 6 is 3

*/ 
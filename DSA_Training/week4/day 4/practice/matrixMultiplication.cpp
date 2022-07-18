#include<iostream>
using namespace std;

int dp[100][100];

int matrixMulti(int a[],int i,int j){
    if(i>=j){
        return 0;
    }
    if(dp[i][j]!=-1){
        return dp[i][j];
    }
    int ans = INT_MAX;
    for(int k=i;k<=j-1;k++){
        int tempAns = matrixMulti(a,i,k)+matrixMulti(a,k+1,j)+(a[i-1]*a[k]*a[j]);
        ans = min(ans,tempAns);
    }
    return dp[i][j]=ans;
}

int main(){
    int n;
    cout<<"Enter number of elements:"<<endl;
    cin>>n;
    int a[100];
    cout<<"Enter the array elements:"<<endl;
    for(int i=0; i<n; i++){
        cin>>a[i];
    }
    memset(dp,-1,sizeof(dp));
    cout<<"Minimum number of multiplications is "<<matrixMulti(a,1,n-1)<<endl;
}

// Time complexity - O(n^3)

/*
Output:

Enter number of elements:
5
Enter the array elements:
1 2 3 4 3
Minimum number of multiplications is 30

*/ 
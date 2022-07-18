// Knapsack problem

#include<iostream>
using namespace std;

int dp[100][100];

int knapsack(int wt[],int val[],int w,int n){
    for(int i=0;i<=n;i++){
        for(int j=0;j<=w;j++){
            if(i==0 || j==0){
                dp[i][j] = 0;
            }
        }
    }
    for(int i=1;i<=n;i++){
        for(int j=1;j<=w;j++){
            if(wt[i-1]<= j){
                dp[i][j] = max(val[i-1]+dp[i-1][j-wt[i-1]], dp[i-1][j]);
            }
            else{
                dp[i][j] = dp[i-1][j];
            }
        }
    }
    return dp[n][w];
}

int main(){
    int n;
    cout<<"Enter the number of elements"<<endl;
    cin>>n;
    int wt[100],val[100];
    cout<<"Enter the value array:"<<endl;
    for(int i=0;i<n;i++){
        cin>>val[i];
    }
    cout<<"Enter the weight array:"<<endl;
    for(int i=0;i<n;i++){
        cin>>wt[i];
    }
    int weight;
    cout<<"Enter weight:"<<endl;
    cin>>weight;
    
    cout<<"Maximum value in the knapsack is "<<knapsack(wt,val,weight,n)<<endl;
}

// Time complexity: O(n*w)

/*
Output:

Enter the number of elements
3
Enter the value array:
60 100 120
Enter the weight array:
10 20 30
Enter weight:
50
Maximum value in the knapsack is 220
*/ 
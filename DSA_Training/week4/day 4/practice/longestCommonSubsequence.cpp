// Longest common subsequence

#include<iostream>
using namespace std;

int dp[100][100];

int lcs(string s1,string s2){
    int m = s1.size();
    int n = s2.size();
    for(int i=0;i<=m;i++){
        for(int j=0;j<=n;j++){
            if(i==0 || j==0){
                dp[i][j] = 0;
            }
        }
    }
    for(int i=1;i<=m;i++){
        for(int j=1;j<=n;j++){
            if(s1[i-1]==s2[j-1]){
                dp[i][j] = 1+dp[i-1][j-1];
            }
            else{
                dp[i][j] = max(dp[i-1][j],dp[i][j-1]);
            }
        }
    }
    return dp[m][n];
}

int main(){
    string s1,s2;
    cout<<"Enter string 1:"<<endl;
    cin>>s1;
    cout<<"Enter string 2:"<<endl;
    cin>>s2;
    cout<<"Length of longest common subsequence is "<<lcs(s1,s2)<<endl;
}

// Time complexity: O(m*n)

/*
Output:

Enter string 1:
abcde
Enter string 2:
aedfe
Length of longest common subsequence is 3

*/ 


// Longest palindromic subsequence

#include<iostream>
using namespace std;

int dp[100][100];

int longestPalindrome(string s1,string s2){
    int n = s2.size();
    for(int i=0;i<=n;i++){
        for(int j=0;j<=n;j++){
            if(i==0 || j==0){
                dp[i][j] = 0;
            }
        }
    }
    for(int i=1;i<=n;i++){
        for(int j=1;j<=n;j++){
            if(s1[i-1]==s2[j-1]){
                dp[i][j] = 1+dp[i-1][j-1];
            }
            else{
                dp[i][j] = max(dp[i-1][j],dp[i][j-1]);
            }
        }
    }
    return dp[n][n];
}

int main(){
    string s1;
    cout<<"Enter string:"<<endl;
    cin>>s1;
    string s2 = s1;
    reverse(s2.begin(), s2.end());
    cout<<"Length of longest common subsequence is "<<longestPalindrome(s1,s2)<<endl;
}

// Time complexity: O(n*n)

/*
Output:

Enter string:
bbbab
Length of longest common subsequence is 4

*/ 


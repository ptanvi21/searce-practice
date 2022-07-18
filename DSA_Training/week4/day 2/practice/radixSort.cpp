// Radix sort

#include<iostream>
using namespace std;

void countSort(int a[],int n, int j){
    int output[100], count[100];
    int max = 10;
    for(int i=0;i<max;i++){
        count[i] = 0;
    }
    //count of elements
    for(int i=0;i<n;i++){
        count[(a[i]/j)%10]++;
    }
    for(int i=1;i<max;i++){
        count[i] += count[i-1];
    }
    //place elements in sorted order
    for(int i=n-1;i>=0;i--){
        output[count[(a[i]/j)%10]-1] = a[i];
                count[(a[i]/j)%10]--;
    }
    for(int i=0;i<n;i++){
        a[i] = output[i];
    }
}

int getMax(int a[],int n){
    int maxEle = a[0];
    for(int i=1;i<n;i++){
        maxEle = max(maxEle,a[i]);
    }
    return maxEle;
}

void radixSort(int a[],int n){
    int maxEle = getMax(a,n);
    for(int i=1;(maxEle/i)>0;i=i*10){
        countSort(a,n,i);
    }
}

int main(){
    int n;
    cout<<"Enter number of elements in array:"<<endl;
    cin>>n;
    int a[100];
    cout<<"Enter array elements:"<<endl;
    for(int i=0;i<n;i++){
        cin>>a[i];
    }
    radixSort(a,n);
    cout<<"Sorted array is"<<endl;
    for(int i=0;i<n;i++){
        cout<<a[i]<<" ";
    }
    cout<<endl;
}

// Time complexity = O(n)

/*
Output:

Enter number of elements in array:
6
Enter array elements:
122 231 1 21 268 45
Sorted array is
1 21 45 122 231 268 

*/
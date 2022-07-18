// Count sort

#include<iostream>
using namespace std;

void countSort(int a[],int n){
    int output[100], count[100];
    int maxEle = a[0];
    for(int i=1;i<n;i++){
        maxEle = max(maxEle,a[i]);
    }
    for(int i=0;i<=maxEle;i++){
        count[i] = 0;
    }
    for(int i=0;i<n;i++){
        count[a[i]]++;
    }
    for(int i=1;i<=maxEle;i++){
        count[i] += count[i-1];
    }
    // find index of each element of original array in count array & place element in output array
    for(int i=n-1;i>=0;i--){
        output[count[a[i]]-1] = a[i];
        count[a[i]]--;
    }
    for(int i=0;i<n;i++){
        a[i] = output[i];
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
    countSort(a,n);
    cout<<"Sorted array is"<<endl;
    for(int i=0;i<n;i++){
        cout<<a[i]<<" ";
    }
    cout<<endl;
}

// Time complexity = O(n+k)

/*
Output:

Enter number of elements in array:
6
Enter array elements:
3 2 3 1 6 6
Sorted array is
1 2 3 3 6 6 

*/
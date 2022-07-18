// Insertion Sort

#include<iostream>
using namespace std;

void insertionSort(int a[], int n){
    int i,j,key;
    for(i=1;i<n;i++){
        key = a[i];
        j = i-1;
        while(j>=0 && a[j]>key){
            a[j+1] = a[j];
            j = j-1;
        }
        a[j+1] = key;
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
    insertionSort(a,n-1);
    cout<<"Sorted array is"<<endl;
    for(int i=0;i<n;i++){
        cout<<a[i]<<" ";
    }
    cout<<endl;
}

// Time complexity = O(n^2)

/*
Output:

Enter number of elements in array:
5
Enter array elements:
12 21 6 24 28
Sorted array is
6 12 21 24 28 

*/
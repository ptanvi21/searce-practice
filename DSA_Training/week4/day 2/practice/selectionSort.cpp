// Selection Sort

#include<iostream>
using namespace std;

int main(){
    int n;
    cout<<"Enter number of elements in array:"<<endl;
    cin>>n;
    int a[100];
    cout<<"Enter array elements:"<<endl;
    for(int i=0;i<n;i++){
        cin>>a[i];
    }
    int minIndex,j;
    for(int i=0;i<n-1;i++){
        minIndex=i;
        for(j=i+1;j<n;j++){
            if(a[j]<a[i]){
                minIndex=j;
            }
            swap(a[minIndex],a[i]);
        }
    }
    cout<<"Sorted array is"<<endl;
    for(int i=0;i<n;i++){
        cout<<a[i]<<" ";
    }
    cout<<endl;
}

// Time complexity - O(n^2)

/*
Output:

Enter number of elements in array:
5
Enter array elements:
6 3 1 9 4
Sorted array
1 4 3 6 9 

*/
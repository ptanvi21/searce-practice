// Heap Sort

#include<iostream>
using namespace std;

void heapify(int a[],int n,int i){
    int largest = i;
    int l = 2*i+1;
    int r = 2*i+2;
    if(l<n && a[l]>a[largest]){
        largest = l;
    }
    if(r<n && a[r]>a[largest]){
        largest = r;
    }
    if(largest!=i){
        swap(a[i],a[largest]);
        heapify(a,n,largest);
    }
}

void heapSort(int a[],int n){
    for(int i=n/2-1;i>=0;i--){
        heapify(a,n,i);
    }
    for(int i=n-1;i>0;i--){
        swap(a[0],a[i]);
        heapify(a,i,0);
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
    heapSort(a,n);
    cout<<"Sorted array is"<<endl;
    for(int i=0;i<n;i++){
        cout<<a[i]<<" ";
    }
    cout<<endl;
}

// Time complexity - O(nlogn)

/*
Output:

Enter number of elements in array:
6
Enter array elements:
21 28 6 24 1 99
Sorted array is
1 6 21 24 28 99 

*/
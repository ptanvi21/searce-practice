// Merge Sort

#include<iostream>
using namespace std;

void merge(int a[], int start, int mid, int end){
    int i,j,k,temp[end-start+1];
    i = start;
    j = mid+1;
    k = 0;
    while(i<=mid && j<=end){
        if(a[i]<a[j]){
            temp[k++] = a[i++];
        }
        else{
            temp[k++] = a[j++];
        }
    }
    while(i<=mid){
        temp[k++] = a[i++];
    }
    while(j<=end){
        temp[k++] = a[j++];
    }
    for(int i=start; i<=end; i++){
        a[i] = temp[i-start];
    }
}

void mergeSort(int a[], int start, int end){
    int mid;
    if(start<end){
        mid = (start+end)/2;
        mergeSort(a,start,mid);
        mergeSort(a,mid+1,end);
        merge(a,start,mid,end);
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
    mergeSort(a,0,n-1);
    cout<<"Sorted array is"<<endl;
    for(int i=0;i<n;i++){
        cout<<a[i]<<" ";
    }
    cout<<endl;
}

// Time complexity - O(n log n)

/*
Output:

Enter number of elements in array:
4
Enter array elements:
4 1 2 6
Sorted array is
1 2 4 6 
 
*/
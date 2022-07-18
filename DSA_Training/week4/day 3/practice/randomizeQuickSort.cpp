// Randomized Quick sort

#include<iostream>
using namespace std;

int partition(int a[],int low,int high){
    int pivot,index,i;
    index = low;
    pivot = high;
    for(int i=low;i<high;i++){
        if(a[i]<a[pivot]){
            swap(a[i],a[index]);
            index++;
        }
    }
    swap(a[pivot],a[index]);
    return index;
}

int randomPivot(int a[],int low,int high){
    int pivot,n,temp;
    n = rand();
    pivot = low + n%(high-low+1);
    swap(a[high],a[pivot]);
    return partition(a,low,high);
}

void quickSort(int a[],int low,int high){
    int pivot;
    if(low<high){
        pivot = randomPivot(a,low,high);
        quickSort(a,low,pivot-1);
        quickSort(a,pivot+1,high);
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
    quickSort(a,0,n-1);
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
28 21 24 6 1 23
Sorted array is
1 6 21 23 24 28 

*/
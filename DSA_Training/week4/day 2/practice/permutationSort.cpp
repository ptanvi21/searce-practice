// Permutation Sort

#include<iostream>
using namespace std;

// check if array is sorted
bool isSorted(int a[], int n){
    while(--n > 1){
        if(a[n]<a[n-1]){
            return false;
        }
    }
    return true;
}

// generate permutations
void shuffle(int a[], int n){
    for(int i=0; i<n; i++){
        swap(a[i], a[rand() % n]);
    }
}

void permutationSort(int a[], int n){
    while(!isSorted(a,n)){
        shuffle(a,n);
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
    permutationSort(a,n-1);
    cout<<"Sorted array is"<<endl;
    for(int i=0;i<n;i++){
        cout<<a[i]<<" ";
    }
    cout<<endl;
}

/*
Output:

Enter number of elements in array:
4
Enter array elements:
3 2 1 4
Sorted array is
1 2 3 4 

*/
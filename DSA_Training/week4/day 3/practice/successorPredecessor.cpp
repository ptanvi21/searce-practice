// Inorder predecessor and successor for a given key in BST

#include<iostream>
#include<stdlib.h>
using namespace std;

struct node{
    int data;
    node *left, *right;
};

node *newnode(int data){
    node *newNode = (node *)malloc(sizeof(node));
    newNode->data = data;
    newNode->left = newNode->right = 0;
    return newNode;
}

void preSuc(node *root, node * &pre, node* &suc, int key){
    if(root==0){
        return;
    }
    if(root->data==key){
        if(root->left!=0){
            node *temp = root->left;
            while(temp->right){
                temp = temp->right;
            }
            pre = temp;
        }
        if(root->right!=0){
            node *temp = root->right;
            while(temp->left){
                temp = temp->left;
            }
            suc = temp;
        }
        return;
    }
    if(root->data > key){
        suc = root;
        preSuc(root->left,pre,suc,key);
    }
    else{
        pre = root;
        preSuc(root->right,pre,suc,key);
    }
}

int main(){
    struct node *root = newnode(5);
    root->left = newnode(3);
    root->right = newnode(7);
    root->left->left = newnode(2);
    root->left->right = newnode(4);
    root->right->left = newnode(6);
    root->right->right = newnode(8);
    int key = 5; 
    node* pre = 0, *suc = 0;
    preSuc(root,pre,suc,key);
    if(pre!=0){
        cout<<"Predecessor is "<<pre->data<<endl;
    }
    else{
        cout<<"No predecessor"<<endl;
    }
    if(suc!=0){
        cout<<"Successor is "<<suc->data<<endl;
    }
    else{
        cout<<"No successor"<<endl;
    }
}

// Time complexity = O(n)

/*
Output:

Predecessor is 4
Successor is 6

*/ 
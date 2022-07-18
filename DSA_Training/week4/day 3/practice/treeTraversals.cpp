// Binary Tree Traversals

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

void preorder(node *root){
    if(root!=0){
        cout<<root->data<<" ";
        preorder(root->left);
        preorder(root->right);
    }
}

void inorder(node *root){
    if(root!=0){
        inorder(root->left);
        cout<<root->data<<" ";
        inorder(root->right);
    }
}

void postorder(node *root){
    if(root!=0){
        postorder(root->left);
        postorder(root->right);
        cout<<root->data<<" ";
    }
}



int main(){
    struct node *root = newnode(45);
    root->left = newnode(25);
    root->right = newnode(60);
    root->left->left = newnode(6);
    root->left->right = newnode(28);
    cout<<"Preorder traversal of binary tree is "<<endl;
    preorder(root);
    cout<<endl;
    cout<<"Inorder traversal of binary tree is "<<endl;
    inorder(root);
    cout<<endl;
    cout<<"Postorder traversal of binary tree is "<<endl;
    postorder(root);
    cout<<endl;
}

// Time complexity - O(n)

/*
Output:

Preorder traversal of binary tree is 
45 25 6 28 60 
Inorder traversal of binary tree is 
6 25 28 45 60 
Postorder traversal of binary tree is 
6 28 25 60 45 
*/
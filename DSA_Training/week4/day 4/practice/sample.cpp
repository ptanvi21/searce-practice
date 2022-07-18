#include<iostream>
#include<stack>
using namespace std;

stack<int>s1,s2;

void enqueCostly(int val){
    // Move all elements from stack1 to stack2 
    while(!s1.empty()){
        s2.push(s1.top());
        s1.pop();
    }
    // Push value into stack1 
    s1.push(val);
    // Push everything back from stack2  to stack1 
    while(!s2.empty()){
        s1.push(s2.top());
        s2.pop();
    }
}

void dequeue(){
    // if stack1 is empty
    if(s1.empty()){
        cout<<"Queue is empty!"<<endl;
    }
    // Return the top of stack1
    int top = s1.top();
    s1.pop();
    cout<<"Dequeued element is "<<top<<endl;
}

void enqueue(int val){
    // Push value into stack1 
    s1.push(val);
}

void dequeCostly(){
    // if stack1 and stack2 are empty
    if(s1.empty() && s2.empty()){
        cout<<"Queue is empty!"<<endl;
    }
    // if stack2 is empty
    if(s2.empty()){
        // push all the elements from stack1 to stack2
        while(!s1.empty()){
            s2.push(s1.top());
            s1.pop();
        }
    }
    // Return the top of stack2
    int top = s2.top();
    s2.pop();
    cout<<"Dequeued element is "<<top<<endl;
}

// Enqueue an item to the queue (using one stack)
void enqueue1(int x){
    // Push value into stack1 
    s1.push(x);
}

// Dequeue an item from the queue (using one stack)
int dequeue1(){
    // if stack1 is empty
    if(s1.empty()){
        cout<<"Queue is empty!"<<endl;
    }
    // pop an item from the stack 
    int top = s1.top();
    s1.pop();
    // if stack becomes empty, return the popped item
    if(s1.empty()){
        return top;
    }
    // recursive call
    int ret = dequeue1();
    // push popped item back to the stack 
	s1.push(top); 
    // return the result of dequeue1() call 
	return ret; 
}

int main(){
    
    //making enqueue operation costly
    enqueCostly(100);
    enqueCostly(200);
    enqueCostly(300);
    dequeue();
    dequeue();
    dequeue();

    //making deque operation costly
    enqueue(10);
    enqueue(20);
    enqueue(30);
    dequeCostly();
    dequeCostly();
    dequeCostly();

    // using one stack
    enqueue1(1);
    enqueue1(2);
    enqueue1(3);
    cout<<"Dequeued element is "<<dequeue1()<<endl;
    cout<<"Dequeued element is "<<dequeue1()<<endl;
    cout<<"Dequeued element is "<<dequeue1()<<endl;
}

/*
Time complexity

- Making enqueue operation costly
    Push operation: O(n)
    Pop operation: O(1)
- Making dequeue operation costly
    Push operation: O(1)
    Pop operation: O(n)
-Using one stack
    Push operation: O(1)
    Pop operation: O(n)
*/ 

/*
Output:

Dequeued element is 100
Dequeued element is 200
Dequeued element is 300
Dequeued element is 10
Dequeued element is 20
Dequeued element is 30
Dequeued element is 1
Dequeued element is 2
Dequeued element is 3
*/ 

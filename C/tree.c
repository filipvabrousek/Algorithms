//
//  main.c
//  SimpleTree
//
//  Created by Filip Vabroušek on 18.08.2021.
//

#include <stdio.h>
#include <stdlib.h>

typedef struct _Node {
    int value;
    struct _Node * left;
    struct _Node * right;
} Node;

void insert(Node * const root, unsigned int value){
    Node* next = root;
    Node* last = NULL;
    
    while(next != NULL){
        if (value > next->value){
            last = next;
            next = next->right;
        } else {
            last = next;
            next = next->left;
        }
    }
   
    Node * myNode = malloc(sizeof(Node));
    myNode->value = value;
    myNode->left = NULL;
    myNode->right = NULL;
    
    if (value < last->value){
         last->left = myNode;
     } else {
         last->right = myNode;
     }
}

int main(int argc, const char * argv[]) {
    Node * root = malloc(sizeof(Node));
    root->value = 20;
    root->left = NULL;
    root->right = NULL;
    
    insert(root, 21);
    insert(root, 26);
    insert(root, 22);
    insert(root, 98);
    return 0;
}





/*
 
 void traverse(Node * root){
     if (root == NULL){
         return;
     }
     
     traverse(root->left);
     printf("%d \n", root->value);
     traverse(root->right);
 }

 */

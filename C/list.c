//
//  main.c
//  List-17-08-21
//
//  Created by Filip Vabroušek on 17.08.2021.
//

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct ListNode {
    char name[20];
    struct ListNode * next;
} _ListNode;

void insert(_ListNode ** head, char insertName [20]){ // Writes to signle with **
    _ListNode * newNode = malloc(sizeof(_ListNode));
    strcpy(newNode->name, insertName);
    newNode->next = *head;
    *head = newNode;
}

int main(int argc, const char * argv[]) {
    _ListNode * last = malloc(sizeof(_ListNode));
    insert(&last, "Filip");
    insert(&last, "Karel");
    insert(&last, "Eda");
    return 0;
}

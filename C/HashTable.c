//
//  main.c
//  HashTable-August-2021
//
//  Created by Filip Vabroušek on 04.08.2021.
//

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct HashNode {
    unsigned int hash;
    char name [20];
    struct HashNode * next;
} _HashNode;


typedef struct HashTable {
    struct HashNode ** buckets;
    size_t size;
} _HashTable;


void initTable(_HashTable * table, size_t size){
    table->size = size;
    table->buckets = malloc(sizeof(_HashNode) * size);
    
    for (unsigned int i = 0; i < size; i++) {
          table->buckets[i] = NULL;
      }
}


void insert(_HashTable * table, char name[20]) {
    int hash = strlen(name) % table->size; //getHash(name, table);
    _HashNode * node = malloc(sizeof(_HashNode));
    strcpy(node->name, name);
    table->buckets[hash] = node;
    table->size++;
}


int main(int argc, const char * argv[]) {
    _HashTable * table = malloc(sizeof(_HashTable));
    initTable(table, 6); // CRASHES WITH 6
    insert(table, "Filip");
    insert(table, "Filipa");
    return 0;
}







/*
 void print(_HashTable table){
     for (unsigned int i = 0; i < table.size; i++){
         _HashNode * node = table.buckets[i];
         
         if (node != NULL){
             printf("%s \n", table.buckets[i]->name);
         }
     }
 }
 print(*table);
 */



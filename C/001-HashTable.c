#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct _Node {
    char name[20];
    struct _Node * next;
} Node;

typedef struct _Table {
    struct _Node ** buckets;
    size_t size;
} Table;

void insert(Table * table, char name[20]){
    int hash = (int) strlen(name) % table->size;
    Node * node = malloc(sizeof(Node));
    strcpy(node->name, name);
    table->buckets[hash] = node;
    table->size++;
}

int main(int argc, const char * argv[]) {
    Table table;
    table.size = 7;
    table.buckets = calloc(7, sizeof(Node));
    insert(&table, "Filip");
    insert(&table, "Jana");
    return 0;
}

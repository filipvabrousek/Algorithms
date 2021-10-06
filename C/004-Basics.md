## C

```c
int main() {
    printf("Hello C!");
}
```

```c
int n = 10; // float, double
char c = 'c';
```

```c
double data[10];
double values = {2, 4, 6, 8};
   
double multi[10][10] ;
multi[2][1] = 20;
```

```c
char greeting[] = "Hello";
printf("%c", greeting[0]);
```

### Methods

```c
int square(int x){
    return x * x;
}

square(3);
```

### Conditions
```c
int a = 2;
if (a > 0){
  printf("Larger!");
}
```


### Structures
```c
typedef struct _Node {
     int id;
} Node;
```

```c
Node me;
me.id = 20;
printf("Me is %d", me.id);
```


### User input

```c
printf("Enter value");
scanf("%s", str);
printf("You entered: %s", str);
```


### Files
```c
FILE * fp = fopen("file.txt","w+");
fprintf(fp, "Testing...");
fclose(fp);
```

```c
FILE * opened = fopen("file.txt", "r");
char line[256];
      
while (fgets(line, sizeof(line), opened)) {
       printf(line);
}
```

### Memory allocation
```c
Node * allocated = malloc(sizeof(Node));
Node * reallocated = realloc(allocated, 20);
```

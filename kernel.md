## Kernel 2022
 does not compile!



```asm
global loader
extern kernel_main
MAGIC equ 0x1badb002
FLAGS equ 0x3
CHECKSUM equ -(MAGIC+FLAGS)

section .text:
align 4
dd MAGIC
dd FLAGS
dd CHECKSUM

loader:
call kernel_main
cli

quit:
hlt
jmp quit
```

```c
void show_text(char * text){
    char * mem = (char *)0xb8000;
    while(*text){
        *mem++ = *text++;
        *mem++ = 0x3;
    }
}

void kernel_main(){
    show_text("Hello BC Filip! You wrote kernel");
}
```


```ld
ENTRY(loader)
SECTIONS {
  . = 0x100000;
  .text : { *(.) }
}
```



https://www.youtube.com/watch?v=wmR-_rxWvYc&t=154s&ab_channel=MoMoYang

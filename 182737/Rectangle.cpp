//
//  Rectangle.cpp
//  AP5PC-Task-2-Rectangle
//
//  Created by Filip Vabroušek on 11.10.2021.
//

#include "Rectangle.hpp"
#include <iostream>
#include <stdbool.h>

//void setWidth(double width);
//void setHeight(double height);

void Rectangle::setWidth(double width){
    this->width = width;
    this->SValid = false;
    this->oValid = false;
}

void Rectangle::setHeight(double height){
    this->height = height;
    this->SValid = false;
    this->oValid = false;
}

double Rectangle::getHeight(){
    return this->height;
}

double Rectangle::getWidth(){
    return this->width;
}


/*
using namespace std;

int main(int argc, const char * argv[]) {
    
    Rectangle rect(20, 20);
    cout << rect.getHeight() << endl;
    
    
    // insert code here...
    std::cout << "Hello, World!\n";
    return 0;
}*/

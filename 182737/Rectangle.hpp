//
//  Rectangle.hpp
//  AP5PC-Task-2-Rectangle
//
//  Created by Filip Vabroušek on 11.10.2021.
//

#ifndef Rectangle_hpp
#define Rectangle_hpp

#include <stdio.h>

class Rectangle {
private:
    double width;
    double height;
    double S;
    double o;
    bool SValid;
    bool oValid;
    
public:
    double getWidth();
    double getHeight();
   // double getS();
  //  double getO();
   // static double getS(double width, double height);
  //  static double getO(double width, double height);
    void setWidth(double width);
    void setHeight(double height);
    
    
    Rectangle(double width, double height){
        this->width = width;
        this->height = height;
    }
    
    static double getS(double width, double height){
         return width * height;
     }
    
    static double getO(double width, double height){
            // cannot use "this", not instance
             return 2 * (width + height);
         }
    
    double getO(){
         return this->getO(this->width, this->height);
     }
    
    double getS(){
         return this->getS(this->width, this->height);
     }


};

#endif /* Rectangle_hpp */

package com.cucumber;

public class Calculator {
    private int x;
    private int y;
    public Calculator(int x, int y){
        this.x = x;
        this.y = y;
    }
    public int add(){
        return this.x + this.y;
    }
}

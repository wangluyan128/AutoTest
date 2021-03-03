package com.test1;

import org.springframework.context.annotation.Configuration;

import javax.annotation.Resource;

public class TextEditor {
    private SpellChecker spellChecker;
    private String name;
    @Resource(name = "spellChecker")
    //a setter method to inject the dependency
    public void setSpellChecker(SpellChecker spellChecker){
        System.out.println("inside setSpellChecker.");
        this.spellChecker = spellChecker;
    }
    //a getter method to return spellChecker
     public SpellChecker getSpellChecker(){
        return spellChecker;
     }
     /*  bean注入时有影响
    public TextEditor(SpellChecker spellChecker){
        System.out.println("Inside TextEditor constructor");
        this.spellChecker = spellChecker;
    }*/

    public void spellCheck(){
        spellChecker.checkSpelling();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}

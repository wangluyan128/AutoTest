package com.cucumber;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.junit.Assert.assertThat;

public class Mystepdefs {

    private Calculator calculator;
    private int result;

    @Given("^x is (\\d+) and y is (\\d+)$")
    public void xIsAndYIs(int arg0,int arg1){
        this.calculator = new Calculator(arg0,arg1);
    }

    @When("^add x and y$")
    public void addXAndY(){
        result = this.calculator.add();
    }

    @Then("^Result is (\\d+)$")
    public void resultIs(int arg0){
        assertThat(result,equalTo(arg0));
    }
}

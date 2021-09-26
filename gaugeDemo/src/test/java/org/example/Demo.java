package org.example;

import com.thoughtworks.gauge.*;


import static org.assertj.core.api.Assertions.assertThat;

public class Demo {

    @BeforeSuite
    public void BeforeSuite(){
        System.out.printf("before suite");
    }
    @AfterSuite
    public void AfterSuite(){
        System.out.printf("after suite");
    }
    @BeforeSpec
    public void BeforeSpec(){
        System.out.printf("before spec");
    }
    @AfterSpec
    public void AfterSpec(){
        System.out.printf("after spec");
    }
    @BeforeScenario
    public void beforescenario(){
        System.out.printf("before scenario");
    }
    @AfterScenario
    public void afterscenario(){
        System.out.printf("after scenario");
    }
    @BeforeStep
    public void beforestep(){
        System.out.printf("before step");
    }
    @AfterStep
    public void afterstep(){
        System.out.printf("after step");
    }

    @Step("开始看电视")
    public void implementation1() {

    }

    @Step("主角<韦小宝>降临")
    public void implementation2(Object arg0) {

    }

    @Step("他乡遇故知<陈近南>,成功他的徒弟")
    public void implementation3(Object arg0) {

    }

    @Step("主角 <韦小宝> 降临")
    public void implementation4(String name) {
        System.out.printf(name);
    }
    @ContinueOnFailure  //失败后继续执行
    @Step("联合 <乾隆> 打败 <鳌拜>")
    public void implementation5(Object arg0, Object arg1) {

    }

    @Step("认识许多漂亮女孩 <table>")
    public void implementation6(Object arg0) {

    }

    @Step("认识许多其他的漂亮女孩<table:gril.csv>")
    public void implementation7(Table gril) {
        for (TableRow row : gril.getTableRows()) {
            String word = row.getCell("girl");
            int expectedCount = Integer.parseInt(row.getCell("age"));
            System.out.printf("姓名："+ word+ " "+"真实年龄："+ expectedCount);

        //    assertThat(expectedCount).isEqualTo(actualCount);
        }
    }

    @Step("关机睡觉")
    public void implementation8() {

    }

    @Step("遇到漂亮的<gril>")
    public void implementation9(Object arg0) {

    }

    @Step("追求到她，并同她结婚")
    public void implementation10() {

    }
}

package org.example;

import com.thoughtworks.gauge.*;
import com.thoughtworks.gauge.datastore.DataStore;
import com.thoughtworks.gauge.datastore.DataStoreFactory;


import static org.assertj.core.api.Assertions.assertThat;

public class Demo {

    @BeforeSuite
    public void BeforeSuite() {
        System.out.printf("before suite");
    }

    @AfterSuite
    public void AfterSuite() {
        System.out.printf("after suite");
    }

    @BeforeSpec
    public void BeforeSpec() {
        System.out.printf("before spec");
    }

    @AfterSpec
    public void AfterSpec() {
        System.out.printf("after spec");
    }

    @BeforeScenario
    public void beforescenario(ExecutionContext context) {
        System.out.printf("before scenario");
        //获得上下文信息
        String scenarioName = context.getCurrentScenario().getName();
        System.out.printf("aaa "+scenarioName);
        //在场景生命周期中保留添加的值，场景执行后，值被清除
        DataStore scenarioStore = DataStoreFactory.getScenarioDataStore();
        scenarioStore.put("element-id","455678");
        String elementId = (String)scenarioStore.get("element-id");
        System.out.printf("elementId:"+elementId);
    }

    @AfterScenario
    public void afterscenario(ExecutionContext context) {
        System.out.printf("after scenario");
        Specification currentSpecifcation = context.getCurrentSpecification();
        System.out.printf("bbb "+currentSpecifcation);
    }

    @BeforeStep
    public void beforestep() {
        System.out.printf("before step");
    }

    @AfterStep
    public void afterstep() {
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
            System.out.printf("姓名：" + word + " " + "真实年龄：" + expectedCount);

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

    public enum Direction{NORTH,SOUTH,EAST,WEST;}
    @Step("Navigate towards <SOUTH>")
    public void implementation11(Direction direction) {
        System.out.printf(direction.toString());
    }
}

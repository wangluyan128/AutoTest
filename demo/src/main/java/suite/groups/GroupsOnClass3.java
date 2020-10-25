package suite.groups;

import org.testng.annotations.Test;

@Test(groups = "student")
public class GroupsOnClass3 {
    public void stu1(){
        System.out.println("GroupsOnClass3中的teacher1运行");
    }
    public void stu2(){
        System.out.println("GroupsOnClass3中的teacher2运行");
    }
}

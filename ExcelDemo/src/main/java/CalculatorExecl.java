import jxl.read.biff.BiffException;
import org.testng.Assert;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import java.io.IOException;
import java.util.HashMap;

public class CalculatorExecl {

    Calculator cal = new Calculator();


    @DataProvider(name = "num")
    public Object[][]Numbers() throws BiffException, IOException{
        ExcelData excelData = new ExcelData("testdata","calculator");
        return excelData.getExcelData();
    }

    @Test(dataProvider = "num")
    public void testAdd(HashMap<String,String> data){
        System.out.println(data.toString());
        float num1 = Float.parseFloat(data.get("num1"));
        float num2 = Float.parseFloat(data.get("num2"));
        float expectedResult = Float.parseFloat(data.get("result"));
        Float actual = cal.add(num1,num2);
        Assert.assertEquals(actual,expectedResult);
    }

    public class Calculator {
        //加
        public float add(float a, float b)
        {
            return a + b ;
        }
        //减
        public int subtract(int a, int b)
        {
            return a - b ;
        }
        //乘
        public int multiply(int a, int b)
        {
            return a * b ;
        }
        //除
        public int divide(int a, int b)throws Exception
        {
            if (0 == b)
            {
                throw new Exception("除数不能为0");
            }
            return a / b ;
        }

    }

}

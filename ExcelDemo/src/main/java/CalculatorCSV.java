import org.testng.Assert;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

public class CalculatorCSV {
/*
    Calculator cal = new Calculator();

    @DataProvider(name = "num")
    public Iterator<Object[]> Numbers() throws IOException{

        System.out.println(new CSVData("add.csv"));


        return (Iterator<Object[]>) new CSVData("add.csv");
    }




    @Test(dataProvider = "num")
    public void testAdd(Map<String,String> data){
        float num1=Float.parseFloat(data.get("n1"));
        float num2 = Float.parseFloat(data.get("n2"));
        float expectedResult = Float.parseFloat(data.get("r1"));
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

*/

    //定义一个DataProvider
    @DataProvider(name = "testData")
    public static Object[][] tocsv() throws Exception{
        return getData("D:\\work\\AutoTest\\ExcelDemo\\src\\main\\resources\\add.csv");
    }


    //利用TestNG的特性，可以直接在方法中传人参数，这些参数从DataProvider中数据化传进来

    @Test(dataProvider = "testData")
    public void testData(String input1,String input2,String result1){
        System.out.println(input1);
        System.out.println(input2);
        System.out.println(result1);
    }

    public static Object[][] getData(String filePath) throws Exception{

        String line;

        //定义list来存放csv中的数据，数组存放的是每行的数据
        List<String[]> list = new ArrayList<String[]>();

        //定义一个BufferReader方便一行一行来读取csv中的数据
        BufferedReader br = new BufferedReader(new InputStreamReader(
                new FileInputStream(filePath)));

        //先读一行，第一行定义的是关键字对应的解释语言，不用存放到list中，
        br.readLine();
        while ((line = br.readLine())!=null){

            String[] fileds = line.split(",");  //获取每行的数据
            list.add(fileds);
        }
        br.close();

        //定义object[][]二维数组，用list.size()定义二维数组行的限度
        Object[][] result = new Object[list.size()][];

        for (int i = 0;i<list.size();i++){
            result[i] = list.get(i);   //将csv每行中的数据存放到二维数组中
        }

        return result;
    }
}

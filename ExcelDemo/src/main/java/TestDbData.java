import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import java.util.List;
import java.util.Map;

public class TestDbData {


    @DataProvider(name = "dbDataMethod")
    public Object[][] dbDataMethod(){
        String sql = "select * from server_cost";
        List<Map<String,String>> result = DbDataHeleper.getDataList(DbDataHeleper.url,sql);
        Object[][] files = new Object[result.size()][];
        for (int i = 0;i<result.size();i++){
            files[i] = new Object[]{result.get(i)};

        }
        return files;
    }


    @Test(dataProvider = "dbDataMethod")
    public void testmethod1(Map<?,?> param){
        System.out.println(param.get("cost_name") + "\t" + param.get("cost_value") + "\t" +param.get("last_update"));
    }
}



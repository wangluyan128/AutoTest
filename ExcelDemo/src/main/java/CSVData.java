import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.Map;
import java.util.TreeMap;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class CSVData implements Iterable<Object[]>{

    BufferedReader in;
    ArrayList<String> csvList = new ArrayList<String>();
    int rowNum = 0; //行数
    int columnNum = 0; //列数
    int curRowNo = 0;  //当前行数
    String columnName[];  //列名

    /*
    *
    * 在TestNG中由@DataProvider(dataProvider="name")修饰的方法
    * 取csv文件数据时，调用此类构造方法（此方法会得到列名并将当前行移到下以后）执行后，转发到
    * TestNg自己的方法中去，然后由它们调用此类实现的hashNext()，next()方法
    * 得到一行数据，然后返回给由@Test（dataProvider="name")修饰的方法，如此
    * 反复到数据读完为止
    * @param fileName
    * @throws IOException
    *
    * */

    public CSVData(String fileName) throws IOException{
        File directory = new File(".");
        String path = ".src.main.resources.";
        String absolutePath = directory.getCanonicalPath() + path.replaceAll("\\.", Matcher.quoteReplacement("\\")+fileName);

        String regex = "\\.";
        String input =directory.getCanonicalPath()+path;
        String replace ="\\";
        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(input);
        input = matcher.replaceAll(Matcher.quoteReplacement(replace))+fileName;
        System.out.println(input);

        File csv = new File(input);
        in = new BufferedReader(new FileReader(csv));
        while (in.ready()){
            csvList.add(in.readLine());
            this.rowNum++;
        }
        String[] str = csvList.get(0).split(",");
        this.columnNum = str.length;
        columnName = new String[columnNum];

        //获取列名
        for (int i =0;i<columnNum;i++){
            columnName[i]=str[i];
        }
        this.curRowNo++;

    }

    public boolean hasNext(){

        if (rowNum==0||curRowNo>=rowNum){
            try{
                in.close();
            }catch (IOException e){
                e.printStackTrace();
            }
            return false;
        }else{
            return true;
        }
    }

    /*
    *
    * 获取一组参数，即一行数据
    * */
    public Object[] next(){

        Map<String,String> s = new TreeMap<String,String>();
        String csvCell[] = csvList.get(curRowNo).split(",");
        for (int i =0;i<this.columnNum;i++){
            s.put(columnName[i],csvCell[i]);
        }
        Object[] d = new Object[1];
        d[0]=s;
        this.curRowNo++;
        return d;
    }

    public void remove(){
        throw new UnsupportedOperationException("remove unsupported");
    }

    @Override
    public Iterator<Object[]> iterator() {
        return null;
    }
}

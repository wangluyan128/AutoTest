import com.mysql.cj.x.protobuf.MysqlxSql;

import java.sql.*;
import java.util.LinkedHashMap;
import java.util.Map;

public class DBUtil {
    private String dbURL = "jdbc:mysql://localhost:3306/mysql?characterEncoding=UTF-8&&serverTimezone=GMT";
    private String user = "root";
    private String password = "123456";
    public DBUtil() {
        try {
            Class.forName("com.mysql.jdbc.Driver");
            Connection con = DriverManager.getConnection(dbURL, user, password);
            DatabaseMetaData dbmd = con.getMetaData();
            System.out.println(dbmd.getDatabaseProductName());
            System.out.println(dbmd.getDatabaseProductVersion());
            System.out.println(dbmd.getDriverName());
            System.out.println(dbmd.getDriverVersion());
            System.out.println(dbmd.getUserName());



            Statement stmt = con.createStatement();
            ResultSet rs = null;
            rs = stmt.executeQuery("select * from user");

            while (rs.next()){
                System.out.println("用户名:" + rs.getString(1) + "\t密码:"
                        + rs.getString(2));

            }
            con.close();
        } catch (Exception ex) {
            ex.printStackTrace();
        }
    }
    public static void main(String[] args) {
        new DBUtil();
    }
}
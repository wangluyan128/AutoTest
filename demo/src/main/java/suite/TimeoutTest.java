package suite;

import org.testng.annotations.Test;

public class TimeoutTest {

    @Test(timeOut = 3000)//单位毫秒

    public void testSuccess() throws InterruptedException{
        Thread.sleep(2000);

    }

    @Test(timeOut = 2000)
    public void testFaild() throws InterruptedException{

        Thread.sleep(3000);

    }
}

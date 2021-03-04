import time
import unittest

from appium import webdriver
from selenium.common.exceptions import NoSuchElementException


class APPTest(unittest.TestCase):
    #测试开始前执行的方法
    def setUp(self) -> None:
        desire_caps = {'platformName':'Android',    #平台名称
                       'platformVersion':'5.1.1',   #系统版本号
                       'deviceName':'127.0.0.1:62001',   #设备名称。如果是真机，在’设置-》关于手机-》设备名称‘里查看
                       'appPackage':'com.youdao.calculator',    #apk包名
                       'appActivity':'com.youdao.calculator.activities.MainActivity',   #activity名称
                       'appWaitActivity':'.activities.MainActivity'#.activities.MainActivity   .activities.GuideActivity
                       }

        self.driver = webdriver.Remote('http://127.0.0.1:4723/wd/hub',desire_caps)  #连接Appium
        self.driver.implicitly_wait(8)

    def test_calculator(self,duration=500,swipe_num=4,tap_num=5):
        '''计算器测试'''
        time.sleep(10)
        window = self.driver.get_window_size()  #获取窗口尺寸
        x0 = window['width']*0.8    #起始x坐标
        x1 = window['width']*0.2    #终止x坐标
        y = window['height']*0.5    #y坐标
        #数字按键的xpath
        btn_xpath = '//android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.support.v4.widget.DrawerLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.widget.LinearLayout[2]/android.widget.LinearLayout[1]/android.widget.LinearLayout[3]/android.view.ViewGroup[1]/android.widget.GridView[1]/android.widget.FrameLayout[{}]/android.widget.FrameLayout[1]'
        '''
        try:
            #实现如果元素存在，说明是第一次登录有提醒页面，先执行滑动、点击屏幕操作引导页，然后运算
            #否则说明非第一次登录，直接执行运算
            flag = self.driver.find_elements_by_android_uiautomator('new UiSelector().text("界面优化")')
            
        except NoSuchElementException:
            #输入数字、符号，进行运算
            print(btn_xpath.format(7))
            self.driver.find_element_by_xpath(btn_xpath.format(7)).click()
            self.driver.find_element_by_xpath(btn_xpath.format(10)).click()
            self.driver.find_element_by_xpath(btn_xpath.format(8)).click()
            time.sleep(5)
        '''
        print(self.driver.page_source)
        list_1 =self.driver.find_elements_by_android_uiautomator('new UiSelector().text("计算")')
        if len(list_1):
            self.driver.find_element_by_xpath(btn_xpath.format(7)).click()
            self.driver.find_element_by_xpath(btn_xpath.format(20)).click()
            self.driver.find_element_by_xpath(btn_xpath.format(8)).click()
            self.driver.find_element_by_xpath(btn_xpath.format(25)).click()
            time.sleep(5)
        else:
            #多次滑动屏幕，处理引导页
            for i in range(swipe_num):
                print(str(x0)+' '+str(y)+' '+str(x1)+' '+str(duration))
                self.driver.swipe(x0,y,x1,y,duration)
                time.sleep(2)

            #self.driver.find_element_by_id('com.youdao.calculator:id/guide_button').click()
            time.sleep(3)

            #多次点击屏幕，处理蒙尘提醒
            for i in range(tap_num):
                self.driver.tap([(764,730),(860,780)],duration)
                time.sleep(1)

            print(btn_xpath.format(7))
            #输入数字、符号，进行运算
            self.driver.find_element_by_xpath(btn_xpath.format(7)).click()
            self.driver.find_element_by_xpath(btn_xpath.format(10)).click()
            self.driver.find_element_by_xpath(btn_xpath.format(8)).click()
            time.sleep(5)

        #测试结束后执行的方法
    def tearDown(self):
        self.driver.quit()
'''
#每次测试都重新安装app
# capabilities.setCapability('noReset',true)
清除编辑框EditText内容
/**
     * 逐字删除编辑框中的文字
     * @param element 文本框架控件
     */
    public void clearText(AndroidElement element){ String className = element.getClass().getSimpleName(); if (className.equals("EditText")){ String text = element.getText(); //跳到最后 driver.pressKeyCode(KEYCODE_MOVE_END); for (int i = 0; i < text.length(); i ++){ //循环后退删除 driver.pressKeyCode(BACKSPACE); } }else { print("不是文本输入框架，无法删除文字"); } }
点击输入法键盘的搜索
方法1: 切换输入法
利用adb命令先切换为自己的输入法，按了搜索再切换为appium的输入法
查看当前手机的输入法
cmd执行下面的的代码

adb shell ime list -s
执行adb命令
先写好一个执行cmd的方法

    /**
     * 执行adb命令
     * @param s 要执行的命令
     */
     private void excuteAdbShell(String s) { Runtime runtime=Runtime.getRuntime(); try{ runtime.exec(s); }catch(Exception e){ print("执行命令:"+s+"出错"); } }
     
在需要搜索的时候执行下面的代码，切换的输入法用自己查看列表的输入法内容，我这里是搜狗输入法

    //使用adb shell 切换输入法-更改为搜狗拼音，这个看你本来用的什么输入法
    excuteAdbShell("adb shell ime set com.sohu.inputmethod.sogou.xiaomi/.SogouIME");
    //再次点击输入框，调取键盘，软键盘被成功调出
    clickView(page.getSearch()); //点击右下角的搜索，即ENTER键 pressKeyCode(AndroidKeyCode.ENTER); //再次切回 输入法键盘为Appium unicodeKeyboard excuteAdbShell("adb shell ime set io.appium.android.ime/.UnicodeIME");
    
'''
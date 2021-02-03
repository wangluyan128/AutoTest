import os
import random
import time
from multiprocessing import Pool

from selenium import webdriver

import tool
def chrome():
    chrome_options = webdriver.ChromeOptions()
    #使用headless无界面浏览器模式
    chrome_options.add_argument('--no-sandox')
    chrome_options.add_argument('--disable-dev-shm-usage')
    #chrome_options.add_argument('window-size=1920*3000') #指定浏览器分辨率
    chrome_options.add_argument('--start-maximized')
    chrome_options.add_argument('--disable-gpu')#谷歌文档提到需要加上这个属性来避免bug，如果不加这个选项，有时定位会出现问题
    chrome_options.add_argument('--hide-scrollbars')#隐藏滚动条，应对一些特殊页面
    chrome_options.add_argument('blink-settings=imagesEnabled=false')#不加载图片，提升速度
    chrome_options.add_argument('--headless')#浏览器不提供可视化页面,linux下如果系统不支持可视化不加这条启动失败
    chrome_options.binary_location = r'C:\Users\DM\AppData\Local\Google\Chrome\Application\chrome.exe'#手动指定使用的浏览器位置
    #启动浏览器，获取网页源代码
    #browser = webdriver.Chrome(chrome_options=chrome_options)#executable_path驱动路径
    driver = webdriver.Chrome(r'E:\work\AutoTest\seleniumDemo\chromedriver.exe',chrome_options=chrome_options)
    #browser_path = "D:\MyChrome_v87\MyChrome.exe"
    #browser = webdriver.chrome()
    mainUrl = "http://bili.haidie-tech.com/?test=1"
    driver.get(mainUrl)
    time.sleep(15)
    #print(f'browser text = {browser.page_source}')
    driver.switch_to_frame(driver.find_element_by_css_selector('body > iframe:nth-child(1)'))
    driver.find_element_by_css_selector('.yzmplayer-play-icon > svg:nth-child(1) > path:nth-child(1)').click()
    print("进入事件")
    while 1:

        element1 = driver.find_element_by_css_selector('#dmtext')
        driver.execute_script("arguments[0].click();", element1)
        element2 = driver.find_element_by_css_selector('#dmtext')
        element2.clear()
        str = tool.random_txt()
        print("PID: %s " % os.getpid()+' '+str)
        element2.send_keys(str)
        driver.find_element_by_css_selector('button.yzmplayer-icon:nth-child(7)').click()
        time.sleep(random.randint(1,3))#random.randint(3,10)
    #browser.quit()

if __name__ =='__main__':
    #for i in range(5):
    #    print('Parent process %s.' % os.getpid())
    #    p = Process(target=chrome)
    #    print('Child process will start.')
    #    p.start()
    #    p.join()
    #chrome()
    #print('Parent process %s.' % os.getpid())

    p = Pool(4)
    for i in range(5):
        p.apply_async(chrome)
    print('Waiting for all subprocesses done...')
    p.close()
    p.join()
    print('All subprocesses done.')



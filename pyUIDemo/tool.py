
import string

from random import Random



def random_str(randomlength=10): #固定长度bai8
    str = ''    #str初始为空
    chars = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789'
    length = len(chars) -1
    random = Random() #random模块用du于生成随机zhi数dao
    for i in range(randomlength):   #循环生成随机字符串
        str+=chars[random.randint(0, length)]
    return str
def random_txt(randomlength=10):
    first_name = ["下一个，下一个", "赞赞赞赞赞赞赞赞赞", "携手XXXX为梦想启程", "我们是相亲相爱的一家人", "nicenicenice"
        , "不错不错", "超越蝶变升华", "6666666666666", "6666666666", "襄盛举，绘蓝图，新跨越"
        , "携手十年共创新篇", "心中有梦要讨动，全力以赴向前冲!", "?????????"
        , "十载春华秋实，今朝骏业日新", "精彩，只因你我同行。", "常"
        , "妙啊", "红包，红包，红包", "泪目", "天气不错", "走一个，走一个", "gogogogo", "正片开始", "老板红包", "说XXX的憋走，带我一个"
        , "加油加油", "这是一bai个有味道du的视频或隔着屏幕我都zhi闻到了味道", "哈哈哈哈哈哈哈", "看得我尴尬症都犯了", "地主家的傻儿子"
        , "bilibili干杯", "老板来一个，老板来一个", "前方高能预警，请非战斗人员撤离", "233333333", "空降指挥部","明浩", "空降成功"
        , "真实", "弹幕护体", "多谢款待","奥利给"]
    second_name = ["妙啊", "红包，红包，红包", "泪目", "天气不错", "走一个，走一个", "gogogogo", "正片开始", "老板红包", "说XXX的憋走，带我一个", "加油加油", "这是一bai个有味道du的视频或隔着屏幕我都zhi闻到了味道", "哈哈哈哈哈哈哈", "看得我尴尬症都犯了", "地主家的傻儿子", "bilibili干杯", "老板来一个，老板来一个", "前方高能预警，请非战斗人员撤离", "233333333", "空降指挥部","明浩", "空降成功", "真实", "弹幕护体", "多谢款待"]
    random = Random()
    str = random.choice(first_name)
    return str

'''
print(random.random())#随机浮点数，默认取0-1，不能指定范围
print(random.randint(1,20))#随机整数
print(random.randrange(1,20))#随机产生一个range
print(random.choice('x23serw4'))#随机取一个元素
print(random.sample('hello',2))#从序列中随机取几个元素
print(random.uniform(1,9))#随机取浮点数，可以指定范围
x = [1,2,3,4,6,7]
random.shuffle(x)#洗牌,打乱顺序，会改变原list的值
print(x)
print(string.digits)#所有的数字
print(string.ascii_letters)#所有的字母
print(string.punctuation)#所有的特殊字符

first_name = ["王", "李", "张", "刘", "赵", "蒋", "孟", "陈", "徐", "杨", "沈", "马", "高", "殷", "上官", "钟", "常"]
second_name = ["伟", "华", "建国", "洋", "刚", "万里", "爱民", "牧", "陆", "路", "昕", "鑫", "兵", "硕", "志宏", "峰", "磊", "雷", "文","明浩", "光", "超", "军", "达"]

name = random.choice(first_name) + random.choice(second_name)
'''



if __name__ == '__main__':

    print(random_txt())
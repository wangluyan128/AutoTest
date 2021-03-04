import com.redis.entity.SetRedisTemplate;
import com.redis.util.RedisUtil;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.serializer.RedisSerializer;
import org.springframework.data.redis.serializer.StringRedisSerializer;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;
import java.util.Set;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:applicationContext-redis.xml")//多路径时@ContextConfiguration(locations = { "classpath*:/spring1.xml", "classpath*:/spring2.xml" })
@SuppressWarnings("all")
public class SpringRedisTest {

    @Autowired
    private RedisUtil redisUtil;
    @Resource(name="redisTemplate")
    private RedisTemplate redisTemplate;
    @Autowired
    private SetRedisTemplate setRedisTemplate;






    @Test
    public void testSpringRedis() {
        setRedisTemplate.setRedisTemplate(redisTemplate); //解决中文乱码

       // redisTemplate.opsForValue().set(token,userId+"",60l,TimeUnit.SECONDS); //set redis 60s

       // Long redisTime = redisTemplate.getExpire(token,TimeUnit.SECONDS);  //用rediskey 获取剩余redis时间

       // if (redisTime!=-2){
       //     redisTemplate.expire(token, redisTime+30, TimeUnit.SECONDS); //使用key重新 设置有效期时间
       // }


        // stringRedisTemplate的操作
        // String读写
        redisTemplate.delete("myStr");
        redisTemplate.opsForValue().set("myStr", "skyLine");
        System.out.println(redisTemplate.opsForValue().get("myStr"));
        System.out.println("---------------");

        // List读写
        redisTemplate.delete("myList");
        redisTemplate.opsForList().rightPush("myList", "T");
        redisTemplate.opsForList().rightPush("myList", "L");
        redisTemplate.opsForList().leftPush("myList", "A");
        List<String> listCache = redisTemplate.opsForList().range("myList", 0, -1);
        for (String s : listCache) {
            System.out.println(s);
        }
        System.out.println("---------------");

        // Set读写
        redisTemplate.delete("mySet");
        redisTemplate.opsForSet().add("mySet", "A");
        redisTemplate.opsForSet().add("mySet", "B");
        redisTemplate.opsForSet().add("mySet", "C");
        Set<String> setCache = redisTemplate.opsForSet().members("mySet");
        for (String s : setCache) {
            System.out.println(s);
        }
        System.out.println("---------------");

        // Hash读写
        redisTemplate.delete("myHash");
        redisTemplate.opsForHash().put("myHash", "BJ", "北京");
        redisTemplate.opsForHash().put("myHash", "SH", "上海");
        redisTemplate.opsForHash().put("myHash", "HN", "河南");
        Map<String, String> hashCache = redisTemplate.opsForHash().entries("myHash");
        for (Map.Entry entry : hashCache.entrySet()) {
            System.out.println(entry.getKey() + " - " + entry.getValue());
        }
        System.out.println("---------------");
    }
}

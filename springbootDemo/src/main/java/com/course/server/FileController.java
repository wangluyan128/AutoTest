package com.course.server;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.Objects;
import java.util.UUID;

@RestController
public class FileController {

    @PostMapping("/upload")
    @ResponseBody
    public String upload(@RequestParam("file") MultipartFile file) {//, @RequestParam("name") String name
        String filename = "";
        try {
            //上传目录地址 自定义
            //String uploadDir = "d:/file_spring/" + name + "/";
            String uploadDir = "d:/file_spring/";
            //如果目录不存在，自动创建文件夹
            File dir = new File(uploadDir);
            if (!dir.exists()) {
                dir.mkdir();
            }
            //调用上传方法
            filename = executeUpload(uploadDir, file);
        } catch (Exception e) {
            //打印错误堆栈信息
            e.printStackTrace();
        }
        return filename;
    }

    private String executeUpload(String uploadDir, MultipartFile file) throws Exception {
        //文件后缀名
        int index = Objects.requireNonNull(file.getOriginalFilename()).lastIndexOf(".");
        String suffix = file.getOriginalFilename().substring(index);
        //上传文件名
        String filename = UUID.randomUUID() + suffix;
        //服务器端保存的文件对象
        File serverFile = new File(uploadDir + filename);
        if (!serverFile.exists()) {
            //先得到文件的上级目录，并创建上级目录，在创建文件
            serverFile.getParentFile().mkdir();
            try {
                //创建文件
                serverFile.createNewFile();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        //将上传的文件写入到服务器端文件内
        file.transferTo(serverFile);
        return filename;
    }
}
package cn.xiaosm.cloud.front.service.impl;

import cn.xiaosm.cloud.front.service.ResourceService;
import cn.xuyanwu.spring.file.storage.FileInfo;
import cn.xuyanwu.spring.file.storage.recorder.FileRecorder;
import lombok.extern.log4j.Log4j2;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

/**
 * @author Young
 * @create 2023/1/12
 * @since 1.0.0
 */
@Slf4j
@Configuration
public class FileRecorderImpl implements FileRecorder {

    @Override
    public boolean record(FileInfo fileInfo) {
        log.info("文件上传成功：{}", fileInfo.getUrl());
        return false;
    }

    @Override
    public FileInfo getByUrl(String s) {
        return null;
    }

    @Override
    public boolean delete(String s) {
        return false;
    }
}